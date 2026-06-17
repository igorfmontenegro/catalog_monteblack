import styled from 'styled-components'

export const Page = styled.div`
  margin: 0 20px;
  max-width: 1320px;

  @media (min-width: 760px) {
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
  }
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

export const InstallmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 8px;
`

export const InstallmentHeaderTimes = styled.div`
  font-size: 11px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  min-width: 50px;
`

export const InstallmentHeaderEach = styled.div`
  font-size: 11px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  flex: 1;
  text-align: center;
`

export const InstallmentHeaderTotal = styled.div`
  font-size: 11px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: right;
  min-width: 90px;
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
  font-weight: 600;
  color: #cfa75e;
  flex: 1;
  text-align: center;
`

export const InstallmentTotal = styled.div`
  font-size: 13px;
  color: #888;
  text-align: right;
  min-width: 90px;
`
