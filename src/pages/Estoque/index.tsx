import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const PASSWORD = import.meta.env.VITE_PASSWORD
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

const DEFAULT_STOCK = `*LACRADOS* 🇧🇷

IPHONE 16e • 128GB 🤍  R$3.250
IPHONE 16 • 128GB 🖤🩶  R$4.350
IPHONE 17 PRO MAX • 256GB 💙  R$8.300
IPHONE 17 PRO MAX • 256GB 🖤  R$8.400

*APPLE AMERICANO* 🇺🇸

AirPods Pro 3 (tradução simultânea)  R$1.850
Apple Watch S11 42mm 🩷  R$2.500
Apple Watch S11 46mm 🩶  R$2.600
MacBook Air M4 16/256 💙  R$6.900

*OUTROS*

Garmin 165 🩶  R$1.700
Boombox 4 🩶  R$2.350
Starlink Mini 🛰️  R$850`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`

const Wrapper = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`

const LoginScreen = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  box-sizing: border-box;
`

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #222;
  border: 3px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
`

const LoginTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`

const LoginDesc = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 2.5rem;
  max-width: 280px;
`

const LoginBox = styled.div`
  width: 100%;
  max-width: 340px;
  text-align: left;
`

interface InputWrapProps { error?: boolean }

const InputWrap = styled.div<InputWrapProps>`
  background: #222;
  border: 1px solid ${p => p.error ? '#e74c3c' : '#333'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: border-color 0.2s;
  margin-bottom: 12px;
  animation: ${p => p.error ? shake : 'none'} 0.4s ease;
  &:focus-within { border-color: ${p => p.error ? '#e74c3c' : '#fff'}; }
`

const InputIcon = styled.span`
  padding: 0 14px;
  font-size: 18px;
  color: #888;
  flex-shrink: 0;
`

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 16px 16px 16px 0;
  outline: none;
  min-width: 0;
  &::placeholder { color: #444; }
`

const LoginBtn = styled.button`
  width: 100%;
  background: #fff;
  color: #111;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  padding: 16px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: opacity 0.2s, transform 0.1s;
  &:hover { opacity: 0.9; }
  &:active { transform: scale(0.98); }
`

const ErrorMsg = styled.div`
  font-size: 12px;
  color: #e74c3c;
  text-align: center;
  margin-top: 10px;
  min-height: 18px;
`

const StockScreen = styled.div`
  min-height: 100vh;
  animation: ${fadeIn} 0.4s ease;
  overflow-x: hidden;
`

const StockHero = styled.div`
  background: #111;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const HeroAvatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #222;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  flex-shrink: 0;
`

const LiveDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2ecc71;
  display: inline-block;
  animation: ${blink} 2s ease-in-out infinite;
  margin-right: 6px;
`

const StockBody = styled.div`
  padding: 1.25rem 1rem;
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow-x: hidden;
`

const SectionLabel = styled.div`
  font-size: 11px;
  letter-spacing: 0.2em;
  color: #888;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  &::after { content: ''; flex: 1; height: 1px; background: #333; }
`

const StockText = styled.div`
  font-size: 14px;
  line-height: 1.9;
  color: #ddd;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
  font-family: inherit;
  width: 100%;
`

const StockEditor = styled.textarea`
  width: 100%;
  background: #222;
  border: 1px solid #333;
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  line-height: 1.9;
  padding: 1.25rem;
  resize: vertical;
  outline: none;
  min-height: 280px;
  font-family: inherit;
  box-sizing: border-box;
  &:focus { border-color: #fff; }
`

const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`

const Btn = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 100px;
  font-family: inherit;
  background: ${p => p.variant === 'primary' ? '#fff' : '#222'};
  color: ${p => p.variant === 'primary' ? '#111' : '#fff'};
  border: ${p => p.variant === 'primary' ? 'none' : '1px solid #333'};
  &:hover { opacity: 0.9; }
`

const Divider = styled.div`
  height: 1px;
  background: #333;
  margin: 2rem 0;
`

const AdminRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 14px 16px;
  cursor: pointer;
  transition: border-color 0.2s;
  gap: 1rem;
  &:hover { border-color: #888; }
`

const ToggleSwitch = styled.div<{ on: boolean }>`
  width: 44px;
  height: 26px;
  background: ${p => p.on ? '#2ecc71' : '#333'};
  border-radius: 13px;
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
  pointer-events: none;
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: ${p => p.on ? '21px' : '3px'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    transition: left 0.2s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }
`

const LogoutRow = styled.div`
  margin-top: 1rem;
  text-align: center;
`

const LogoutLink = styled.button`
  font-size: 13px;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  padding: 0.5rem;
  &:hover { color: #fff; }
`

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
`

const ModalBox = styled.div`
  background: #222;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 320px;
  animation: ${fadeIn} 0.2s ease;
  box-sizing: border-box;
`

export default function Estoque() {
  const [screen, setScreen] = useState<'login' | 'stock'>('login')
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState(false)
  const [passErrorMsg, setPassErrorMsg] = useState('')
  const [adminOn, setAdminOn] = useState(false)
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [adminPass, setAdminPass] = useState('')
  const [adminError, setAdminError] = useState(false)
  const [adminErrorMsg, setAdminErrorMsg] = useState('')
  const [stock, setStock] = useState(() => localStorage.getItem('mb_stock') || DEFAULT_STOCK)
  const [editStock, setEditStock] = useState(stock)
  const [lastUpdate, setLastUpdate] = useState(() => localStorage.getItem('mb_date') || 'Atualizado agora')

  function checkPassword() {
    if (pass.trim().toLowerCase() === PASSWORD) {
      setScreen('stock')
      setPass('')
    } else {
      setPassError(true)
      setPassErrorMsg('Palavra-chave incorreta. Tente novamente.')
      setPass('')
      setTimeout(() => { setPassError(false); setPassErrorMsg('') }, 2500)
    }
  }

  function openAdminModal() {
    if (adminOn) {
      cancelEdit()
    } else {
      setShowAdminModal(true)
    }
  }

  function checkAdminPass() {
    if (adminPass.trim() === ADMIN_PASSWORD) {
      setShowAdminModal(false)
      setAdminPass('')
      setAdminOn(true)
      setEditStock(stock)
    } else {
      setAdminError(true)
      setAdminErrorMsg('Senha incorreta.')
      setAdminPass('')
      setTimeout(() => { setAdminError(false); setAdminErrorMsg('') }, 2000)
    }
  }

  function saveStock() {
    const now = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    localStorage.setItem('mb_stock', editStock)
    localStorage.setItem('mb_date', 'Atualizado em ' + now)
    setStock(editStock)
    setLastUpdate('Atualizado em ' + now)
    cancelEdit()
  }

  function cancelEdit() {
    setAdminOn(false)
    setEditStock(stock)
  }

  function logout() {
    if (adminOn) cancelEdit()
    setScreen('login')
  }

  if (screen === 'login') {
    return (
      <Wrapper>
        <LoginScreen>
          <Avatar>📦</Avatar>
          <LoginTitle>Área de Revendedores</LoginTitle>
          <LoginDesc>Digite a palavra-chave para acessar o estoque disponível</LoginDesc>
          <LoginBox>
            <InputWrap error={passError}>
              <InputIcon>🔑</InputIcon>
              <Input
                type="password"
                placeholder="Palavra-chave"
                value={pass}
                onChange={e => setPass(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && checkPassword()}
                autoComplete="off"
              />
            </InputWrap>
            <ErrorMsg>{passErrorMsg}</ErrorMsg>
            <LoginBtn onClick={checkPassword}>Acessar estoque</LoginBtn>
          </LoginBox>
        </LoginScreen>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <StockScreen>
        <StockHero>
          <HeroAvatar>📱</HeroAvatar>
          <div>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 3 }}>Estoque disponível hoje</h2>
            <p style={{ fontSize: 13, color: '#888', display: 'flex', alignItems: 'center' }}>
              <LiveDot />{lastUpdate}
            </p>
          </div>
        </StockHero>

        <StockBody>
          <SectionLabel>produtos disponíveis</SectionLabel>

          {adminOn ? (
            <>
              <StockEditor value={editStock} onChange={e => setEditStock(e.target.value)} />
              <ActionRow>
                <Btn variant="secondary" onClick={cancelEdit}>Cancelar</Btn>
                <Btn variant="primary" onClick={saveStock}>Salvar estoque</Btn>
              </ActionRow>
            </>
          ) : (
            <StockText>{stock}</StockText>
          )}

          <Divider />

          <AdminRow onClick={openAdminModal}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Modo administrador</div>
              <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>Requer senha para editar o estoque</div>
            </div>
            <ToggleSwitch on={adminOn} />
          </AdminRow>

          <LogoutRow>
            <LogoutLink onClick={logout}>Sair da área restrita</LogoutLink>
          </LogoutRow>
        </StockBody>
      </StockScreen>

      {showAdminModal && (
        <ModalOverlay onClick={e => e.target === e.currentTarget && setShowAdminModal(false)}>
          <ModalBox>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>🔒 Acesso de administrador</div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: '1.5rem' }}>Apenas o administrador pode editar o estoque</div>
            <InputWrap error={adminError}>
              <InputIcon>🔐</InputIcon>
              <Input
                type="password"
                placeholder="Senha de administrador"
                value={adminPass}
                onChange={e => setAdminPass(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') checkAdminPass(); if (e.key === 'Escape') setShowAdminModal(false) }}
                autoComplete="off"
                autoFocus
              />
            </InputWrap>
            <ErrorMsg>{adminErrorMsg}</ErrorMsg>
            <ActionRow>
              <Btn variant="secondary" onClick={() => setShowAdminModal(false)}>Cancelar</Btn>
              <Btn variant="primary" onClick={checkAdminPass}>Entrar</Btn>
            </ActionRow>
          </ModalBox>
        </ModalOverlay>
      )}
    </Wrapper>
  )
}
