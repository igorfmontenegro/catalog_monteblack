import { useState, ChangeEvent } from 'react'
import { NumericFormat } from 'react-number-format'
import { Input } from '../../components/Input'
import {
  CalcHeader,
  CalcAvatar,
  CalcTitle,
  CalcSub,
  Calculator,
  FieldLabel,
  CheckRow,
  ResultHero,
  ResultLabel,
  ResultValue,
  InstallmentList,
  InstallmentRow,
  InstallmentTimes,
  InstallmentEach,
  InstallmentTotal
} from './Calculadora.styles'
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
    5: 8.29,
    6: 9.29,
    7: 10.39,
    8: 11.29,
    9: 12.19,
    10: 13.09,
    11: 13.89,
    12: 14.79
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
          <CalcHeader>
            <CalcAvatar>🧮</CalcAvatar>
            <div>
              <CalcTitle>Calculadora de taxas</CalcTitle>
              <CalcSub>SIMULE SEU PARCELAMENTO</CalcSub>
            </div>
          </CalcHeader>

          <Calculator onSubmit={calculateTax}>
            <FieldLabel>Qual o valor total a ser dividido?</FieldLabel>
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

            <CheckRow>
              <input
                type="checkbox"
                name="entrybox"
                id="entrybox"
                checked={checkBoxValue}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="entrybox">Haverá valor de entrada?</label>
            </CheckRow>

            {checkBoxValue && (
              <>
                <FieldLabel>Quanto?</FieldLabel>
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

            <Button action="Calcular" />
          </Calculator>
        </>
      ) : (
        <>
          <CalcHeader>
            <CalcAvatar>📊</CalcAvatar>
            <div>
              <CalcTitle>Resultado da simulação</CalcTitle>
              <CalcSub>PARCELAMENTOS DISPONÍVEIS</CalcSub>
            </div>
          </CalcHeader>

          <ResultHero>
            <ResultLabel>Valor simulado</ResultLabel>
            <ResultValue>R$ {valueSimulated.toFixed(2)}</ResultValue>
          </ResultHero>

          <InstallmentList>
            {tableData.map((item, index) => (
              <InstallmentRow key={index}>
                <InstallmentTimes>{item.fees}x</InstallmentTimes>
                <InstallmentEach>R$ {item.valueFees}</InstallmentEach>
                <InstallmentTotal>R$ {item.valueTotal}</InstallmentTotal>
              </InstallmentRow>
            ))}
          </InstallmentList>

          <Button action="Nova simulação" onClick={newSimulated} />
        </>
      )}
    </>
  )
}

export default Calculadora
