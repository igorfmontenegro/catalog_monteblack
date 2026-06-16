import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import {
  Products,
  Foot,
  CatalogGrid,
  Card,
  CardTop,
  ProductTitle,
  Dots,
  Dot,
  Tier,
  TierLabel,
  TierPrice,
  AdminFab,
  AdminCard,
  ColorPicker,
  ColorOption,
  SaveBar
} from './Home.styles'

import WhatsApp from '../../icons/Atendimento.png'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

export interface ProductListProps {
  produto_id: string
  nome: string
  value: string
  card: string
  valueSecond?: string
  cardSecond?: string
  cores: string[]
}

const COLOR_PALETTE = [
  { hex: '#1a1a1a', label: 'Preto' },
  { hex: '#f0ede5', label: 'Branco' },
  { hex: '#3d5a73', label: 'Azul' },
  { hex: '#1e3a52', label: 'Azul escuro' },
  { hex: '#a8c5d6', label: 'Azul clarinho' },
  { hex: '#e8a8b8', label: 'Rosa' },
  { hex: '#f0d4d8', label: 'Rosa clarinho' },
  { hex: '#7a9b7e', label: 'Verde' },
  { hex: '#b8a8d4', label: 'Lilás' },
  { hex: '#d4793d', label: 'Laranja' }
]

const DEFAULT_PRODUCTS: ProductListProps[] = [
  { produto_id: 'iphone-15', nome: 'iPhone 15', value: '128GB: R$3.750 à vista', card: '12x de R$370 nos cartões', valueSecond: '256GB: R$4.600 à vista', cardSecond: '12x de R$450 nos cartões', cores: ['#a8c5d6', '#f0d4d8', '#1a1a1a'] },
  { produto_id: 'iphone-16', nome: 'iPhone 16', value: '128GB: R$4.500 à vista', card: '12x de R$440 nos cartões', valueSecond: '256GB: R$5.500 à vista', cardSecond: '12x de R$540 nos cartões', cores: ['#1a1a1a', '#f0ede5', '#3d5a73', '#e8a8b8', '#7a9b7e'] },
  { produto_id: 'iphone-17', nome: 'iPhone 17', value: '128GB: R$6.500 à vista', card: '12x de R$640 nos cartões', valueSecond: '256GB: R$7.200 à vista', cardSecond: '12x de R$710 nos cartões', cores: ['#1a1a1a', '#f0ede5', '#3d5a73', '#b8a8d4'] },
  { produto_id: 'iphone-17-pro', nome: 'iPhone 17 Pro', value: '256GB: R$9.800 à vista', card: '12x de R$970 nos cartões', valueSecond: '512GB: R$11.500 à vista', cardSecond: '12x de R$1.130 nos cartões', cores: ['#f0ede5', '#d4793d', '#1e3a52'] },
  { produto_id: 'iphone-17-pro-max', nome: 'iPhone 17 Pro Max', value: '256GB: R$10.200 à vista', card: '12x de R$990 nos cartões', valueSecond: '512GB: R$12.000 à vista', cardSecond: '12x de R$1.190 nos cartões', cores: ['#f0ede5', '#d4793d', '#1e3a52'] }
]

function Home() {
  const [products, setProducts] = useState<ProductListProps[]>(DEFAULT_PRODUCTS)
  const [editing, setEditing] = useState<ProductListProps[]>(DEFAULT_PRODUCTS)
  const [loading, setLoading] = useState(true)
  const [adminOn, setAdminOn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [adminPass, setAdminPass] = useState('')
  const [adminError, setAdminError] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadCatalog()
  }, [])

  async function loadCatalog() {
    setLoading(true)
    try {
      const { data } = await supabase.from('Catalogo').select('*').order('id', { ascending: true })
      if (data && data.length > 0) {
        const mapped = data.map(d => ({
          produto_id: d.produto_id,
          nome: d.nome,
          value: d.value,
          card: d.card,
          valueSecond: d.valueSecond,
          cardSecond: d.cardSecond,
          cores: d.cores || []
        }))
        setProducts(mapped)
        setEditing(mapped)
      }
    } catch {
      // mantém DEFAULT_PRODUCTS
    }
    setLoading(false)
  }

  function openAdmin() {
    if (adminOn) {
      cancelEdit()
    } else {
      setShowLoginModal(true)
    }
  }

  function checkAdminPass() {
    if (adminPass.trim() === ADMIN_PASSWORD) {
      setShowLoginModal(false)
      setAdminPass('')
      setAdminOn(true)
      setEditing(products)
    } else {
      setAdminError(true)
      setAdminPass('')
      setTimeout(() => setAdminError(false), 2000)
    }
  }

  function updateField(index: number, field: keyof ProductListProps, val: string) {
    const copy = [...editing]
    copy[index] = { ...copy[index], [field]: val }
    setEditing(copy)
  }

  function toggleColor(index: number, hex: string) {
    const copy = [...editing]
    const current = copy[index].cores || []
    copy[index] = {
      ...copy[index],
      cores: current.includes(hex) ? current.filter(c => c !== hex) : [...current, hex]
    }
    setEditing(copy)
  }

  async function saveCatalog() {
    setSaving(true)
    try {
      await supabase.from('Catalogo').delete().neq('id', 0)
      const rows = editing.map(p => ({
        produto_id: p.produto_id,
        nome: p.nome,
        value: p.value,
        card: p.card,
        valueSecond: p.valueSecond || '',
        cardSecond: p.cardSecond || '',
        cores: p.cores || []
      }))
      await supabase.from('Catalogo').insert(rows)
      setProducts(editing)
      setAdminOn(false)
    } catch {
      alert('Erro ao salvar. Tente novamente.')
    }
    setSaving(false)
  }

  function cancelEdit() {
    setAdminOn(false)
    setEditing(products)
  }

  const list = adminOn ? editing : products

  return (
    <>
      <Products>
        <h2>
          CATÁLOGO <br></br>
          <span> Lacrados com 01 ano de Garantia</span>
        </h2>

        {!loading && (
          <CatalogGrid>
            {list.map((p, index) => (
              <Card key={p.produto_id}>
                <CardTop>
                  <ProductTitle>{p.nome}</ProductTitle>
                  {!adminOn && (
                    <Dots>
                      {(p.cores || []).map((c, i) => <Dot key={i} style={{ background: c }} />)}
                    </Dots>
                  )}
                </CardTop>

                {adminOn ? (
                  <AdminCard>
                    <label>Cores disponíveis</label>
                    <ColorPicker>
                      {COLOR_PALETTE.map(c => (
                        <ColorOption
                          key={c.hex}
                          selected={(p.cores || []).includes(c.hex)}
                          style={{ background: c.hex }}
                          onClick={() => toggleColor(index, c.hex)}
                          title={c.label}
                        />
                      ))}
                    </ColorPicker>
                    <label>Preço 1</label>
                    <input value={p.value} onChange={e => updateField(index, 'value', e.target.value)} />
                    <label>Parcelamento 1</label>
                    <input value={p.card} onChange={e => updateField(index, 'card', e.target.value)} />
                    <label>Preço 2</label>
                    <input value={p.valueSecond || ''} onChange={e => updateField(index, 'valueSecond', e.target.value)} />
                    <label>Parcelamento 2</label>
                    <input value={p.cardSecond || ''} onChange={e => updateField(index, 'cardSecond', e.target.value)} />
                  </AdminCard>
                ) : (
                  <>
                    <Tier>
                      <TierLabel>{p.value.split(':')[0]}</TierLabel>
                      <TierPrice>
                        <span className="cash">{p.value.split(':')[1]?.replace('à vista', '').trim()}</span>
                        <span className="inst">{p.card}</span>
                      </TierPrice>
                    </Tier>
                    {p.valueSecond && (
                      <Tier>
                        <TierLabel>{p.valueSecond.split(':')[0]}</TierLabel>
                        <TierPrice>
                          <span className="cash">{p.valueSecond.split(':')[1]?.replace('à vista', '').trim()}</span>
                          <span className="inst">{p.cardSecond}</span>
                        </TierPrice>
                      </Tier>
                    )}
                  </>
                )}
              </Card>
            ))}
          </CatalogGrid>
        )}

        {adminOn && (
          <SaveBar>
            <button className="cancel" onClick={cancelEdit}>Cancelar</button>
            <button className="save" onClick={saveCatalog} disabled={saving}>
              {saving ? 'Salvando...' : 'Salvar catálogo'}
            </button>
          </SaveBar>
        )}
      </Products>

      <Foot>
        <h1>
          Se interessou por <span>algum produto</span> ou ainda possui
          <span> alguma dúvida?</span>
        </h1>

        <a href="https://wa.me/55082993271667">
          <img src={WhatsApp} />
        </a>
      </Foot>

      <AdminFab onClick={openAdmin} title="Área administrativa">
        {adminOn ? '✕' : '⚙'}
      </AdminFab>

      {showLoginModal && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300, padding: '1.5rem' }}
          onClick={e => e.target === e.currentTarget && setShowLoginModal(false)}
        >
          <div style={{ background: '#222', border: '1px solid #333', borderRadius: 16, padding: '2rem', width: '100%', maxWidth: 320 }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: '#fff' }}>🔒 Acesso de administrador</div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: '1.5rem' }}>Digite a senha para editar o catálogo</div>
            <input
              type="password"
              autoFocus
              placeholder="Senha"
              value={adminPass}
              onChange={e => setAdminPass(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') checkAdminPass(); if (e.key === 'Escape') setShowLoginModal(false) }}
              style={{ width: '100%', boxSizing: 'border-box', background: '#1a1a1a', border: `1px solid ${adminError ? '#e74c3c' : '#333'}`, borderRadius: 10, color: '#fff', fontSize: 16, padding: '14px', outline: 'none', marginBottom: 8 }}
            />
            {adminError && <div style={{ fontSize: 12, color: '#e74c3c', marginBottom: 8 }}>Senha incorreta.</div>}
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <button onClick={() => setShowLoginModal(false)} style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid #333', background: '#1a1a1a', color: '#fff', cursor: 'pointer' }}>Cancelar</button>
              <button onClick={checkAdminPass} style={{ flex: 1, padding: 12, borderRadius: 10, border: 'none', background: '#fff', color: '#111', fontWeight: 700, cursor: 'pointer' }}>Entrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
