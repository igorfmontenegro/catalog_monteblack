import styled from 'styled-components'

export const CalcHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 1.25rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #2a2a2a;
`

export const CalcAvatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #222;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
`

export const CalcTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 3px;
`

export const CalcSub = styled.div`
  font-size: 12px;
  color: #cfa75e;
  font-weight: 600;
  letter-spacing: 0.03em;
`

export const Calculator = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const FieldLabel = styled.p`
  color: #ccc;
  font-size: 13px;
  font-weight: 600;
  margin: 14px 0 6px;
`

export const CheckRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px 0 6px;

  label {
    color: #ccc;
    font-size: 13px;
    font-weight: 600;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    accent-color: #cfa75e;
    cursor: pointer;
  }
`

export const ResultHero = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #2a2a2a;
`

export const ResultLabel = styled.div`
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
`

export const ResultValue = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
`

export const InstallmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InstallmentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  border: 1px solid #2e2e2e;
  border-radius: 12px;
  padding: 12px 16px;
`

export const InstallmentTimes = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  min-width: 50px;
`

export const InstallmentEach = styled.div`
  font-size: 13px;
  color: #888;
  flex: 1;
  text-align: center;
`

export const InstallmentTotal = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #cfa75e;
  text-align: right;
  min-width: 90px;
`
