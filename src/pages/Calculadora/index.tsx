import { useState, ChangeEvent } from 'react'
import { NumericFormat } from 'react-number-format'
import { Input } from '../../components/Input'
import { Calculator, TableContainer, Title } from './Calculadora.styles'
import { Button } from '../../components/Button'

function Calculadora() {
  const [checkBoxValue, setCheckBoxValue] = useState(false)
  const [calculated, setCalculated] = useState(false)
  const [valueSimulated, setValueSimulated] = useState(0)
  const [tableData, setTableData] = useState(
    [] as { fees: string; valueTotal: string; valueFees: number }[]
  )

  const parcelFees = {
    1: 3.69,
    2: 6.99,
    3: 6.99,
    4: 7.29,
    5: 7.99,
    6: 8.79,
    7: 9.59,
    8: 10.39,
    9: 11.19,
    10: 11.99,
    11: 12.79,
    12: 13.49
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setCheckBoxValue(checked)
  }

  const calculateTax = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const productValueString = formData.get('productvalue') as string
    const entryValueString = checkBoxValue
      ? (formData.get('entryvalue') as string)
      : undefined

    const productValue =
      parseFloat(
        productValueString.replace('R$', '').replace('.', '').trim()
      ) || 0

    const entryValue =
      checkBoxValue &&
      entryValueString &&
      !isNaN(parseFloat(entryValueString.replace('R$', '').trim()))
        ? parseFloat(
            entryValueString.replace('R$', '').replace('.', '').trim()
          ) || 0
        : undefined

    if (!entryValue) {
      const tableData = Object.keys(parcelFees).map((numFees) => {
        const num = parseInt(numFees, 10) as keyof typeof parcelFees
        const calculatedFees = productValue / (1 - parcelFees[num] / 100)
        return {
          fees: numFees,
          valueTotal: calculatedFees.toFixed(2),
          valueFees: parseFloat(
            (calculatedFees / parseFloat(num.toString())).toFixed(2)
          )
        }
      })

      setValueSimulated(productValue)
      setTableData(tableData)
    } else {
      const tableData = Object.keys(parcelFees).map((numFees) => {
        const num = parseInt(numFees, 10) as keyof typeof parcelFees
        const calculatedFees =
          (productValue - entryValue) / (1 - parcelFees[num] / 100)
        return {
          fees: numFees,
          valueTotal: calculatedFees.toFixed(2),
          valueFees: parseFloat(
            (calculatedFees / parseFloat(num.toString())).toFixed(2)
          )
        }
      })

      setValueSimulated(productValue - entryValue)
      setTableData(tableData)
    }

    setCalculated(true)
  }

  const newSimulated = () => {
    setCalculated(false)
    setValueSimulated(0)
    setCheckBoxValue(false)
  }

  return (
    <>
      {!calculated ? (
        <>
          <Title>
            CALCULADORA <br />
            <span> Simule aqui o seu pagamento</span>
          </Title>
          <Calculator onSubmit={calculateTax}>
            <p> Qual o valor total a ser dividido? </p>
            <NumericFormat
              name="productvalue"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$"
              decimalScale={2}
              placeholder="R$"
              customInput={Input}
              required={true}
            />
            <Input
              label="Haverá valor de entrada?"
              type="checkbox"
              name="entrybox"
              checked={checkBoxValue}
              onChange={handleCheckboxChange}
            />
            {checkBoxValue && (
              <>
                <p> Quanto? </p>
                <NumericFormat
                  name="entryvalue"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="R$"
                  decimalScale={2}
                  placeholder="R$"
                  customInput={Input}
                />
              </>
            )}

            <Button action="CALCULAR" />
          </Calculator>
        </>
      ) : (
        <>
          <Title>
            RESULTADO <br />
            <span> Valor simulado: R${valueSimulated}</span>
          </Title>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>X</th>
                  <th>Valor Parcela</th>
                  <th>Valor Total</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.fees}</td>
                    <td>R$ {item.valueFees}</td>
                    <td>R$ {item.valueTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>

          <Button action="RETORNAR" onClick={newSimulated} />
        </>
      )}
    </>
  )
}

export default Calculadora
