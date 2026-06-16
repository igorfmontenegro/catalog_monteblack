import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Products, Foot, AdminFab, AdminPanel } from './Home.styles'

import WhatsApp from '../../icons/Atendimento.png'

import iPhone13 from '../../assets/iphone13.png'
import iPhone14 from '../../assets/iphone14.png'
import iPhone15 from '../../assets/iphone15.png'
import iPhone16 from '../../assets/iphone16.png'
import iPhone17P from '../../assets/iphone17pro.png'
import iPhone17PMax from '../../assets/iphone17promax.png'

import { Product } from '../../components/Product'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

export interface ProductListProps {
  produto_id: string
  image: string
  name: string
  condition?: string
  value: string
  card: string
  valueSecond?: string
  cardSecond?: string
}

// Imagens fixas — não mudam pelo painel, só os textos/preços
const IMAGES: Record<string, string> = {
  'iphone-13': iPhone13,
  'iphone-14': iPhone14,
  'iphone-15': iPhone15,
  'iphone-16': iPhone16,
  'iphone-17-pro': iPhone17P,
  'iphone-17-pro-max': iPhone17PMax
}

const DEFAULT_PRODUCTS: Array<Omit<ProductListProps, 'image'>> = [
  {
    produto_id: 'iphone-13',
    name: 'iPhone 13',
    value: '128GB: R$3.100 à vista',
    card: '12x de R$315 nos cartões',
    valueSecond: '256GB: R$3.500 à vista',
    cardSecond: '12x de R$345 nos cartões'
  },
  {
    produto_id: 'iphone-14',
    name: 'iPhone 14',
    value: '128GB: R$3.500 à vista',
    card: '12x de R$340 nos cartões',
    valueSecond: '256GB: R$3.800 à vista',
    cardSecond: '12x de R$370 nos cartões'
  },
  {
    produto_id: 'iphone-15',
    name: 'iPhone 15',
    value: '128GB: R$3.750 à vista',
    card: '12x de R$370 nos cartões',
    valueSecond: '256GB: R$4.600 à vista',
    cardSecond: '12x de R$450 nos cartões'
  },
  {
    produto_id: 'iphone-16',
    name: 'iPhone 16',
    value: '128GB: R$4.500 à vista',
    card: '12x de R$440 nos cartões',
    valueSecond: '256GB: R$5.500 à vista',
    cardSecond: '12x de R$540 nos cartões'
  },
  {
    produto_id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    value: '256GB: R$9.800 à vista',
    card: '12x de R$970 nos cartões',
    valueSecond: '512GB: R$11.500 à vista',
    cardSecond: '12x de R$1.130 nos cartões'
  },
  {
    produto_id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    value: '256GB: R$10.200 à vista',
    card: '12x de R$990 nos cartões',
    valueSecond: '512GB: R$12.000 à vista',
    cardSecond: '12x de R$1.190 nos cartões'
  }
]

function Home() {
  const [products, setProducts] = useState<Array<Omit<ProductListProps, 'image'>>>(DEFAULT_PRODUCTS)
  const [loading, setLoading] = useState(true)
  const [adminOn, setAdminOn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [adminPass, setAdminPass] = useState('')
  const [adminError, setAdminError] = useState(false)
  const [editing, setEditing] = useState<Array<Omit<ProductListProps, 'image'>>>(DEFAULT_PRODUCTS)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadCatalog()
  }, [])

  async function loadCatalog() {
    setLoading(true)
    try {
      const { data } = await supabase
        .from('Catalogo')
        .select('*')
        .order('id', { ascending: true })

      if (data && data.length > 0) {
        const mapped = data.map(d => ({
          produto_id: d.produto_id,
          name: d.nome,
          condition: d.condition,
          value: d.value,
          card: d.card,
          valueSecond: d.valueSecond,
          cardSecond: d.cardSecond
        }))
        setProducts(mapped)
        setEditing(mapped)
      }
    } catch {
      // mantém DEFAULT_PRODUCTS em caso de erro
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

  async function saveCatalog() {
    setSaving(true)
    try {
      await supabase.from('Catalogo').delete().neq('id', 0)
      const rows = editing.map(p => ({
        produto_id: p.produto_id,
        nome: p.name,
        condition: p.condition || '',
        value: p.value,
        card: p.card,
        valueSecond: p.valueSecond || '',
        cardSecond: p.cardSecond || ''
      }))
      await supabase.from('Catalogo').insert(rows)
      setProducts(editing)
      cancelEdit()
    } catch {
      alert('Erro ao salvar. Tente novamente.')
    }
    setSaving(false)
  }

  function cancelEdit() {
    setAdminOn(false)
    setEditing(products)
  }

  return (
    <>
      <Products>
        <h2>
          CATÁLOGO <br></br>
          <span> Lacrados com 01 ano de Garantia</span>
        </h2>

        {!loading && (adminOn ? editing : products).map((productList, index) => (
          adminOn ? (
            <AdminPanel key={productList.produto_id}>
              <strong>{productList.name}</strong>
              <label>Preço 1</label>
              <input value={productList.value} onChange={e => updateField(index, 'value', e.target.value)} />
              <label>Parcelamento 1</label>
              <input value={productList.card} onChange={e => updateField(index, 'card', e.target.value)} />
              <label>Preço 2</label>
              <input value={productList.valueSecond || ''} onChange={e => updateField(index, 'valueSecond', e.target.value)} />
              <label>Parcelamento 2</label>
              <input value={productList.cardSecond || ''} onChange={e => updateField(index, 'cardSecond', e.target.value)} />
            </AdminPanel>
          ) : (
            <Product
              key={productList.produto_id}
              image={IMAGES[productList.produto_id]}
              name={productList.name}
              condition={productList.condition}
              value={productList.value}
              card={productList.card}
              valueSecond={productList.valueSecond}
              cardSecond={productList.cardSecond}
            />
          )
        ))}

        {adminOn && (
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', margin: '10px 0 20px' }}>
            <button
              onClick={cancelEdit}
              style={{ padding: '12px 20px', borderRadius: 10, border: '1px solid #444', background: '#222', color: '#fff', cursor: 'pointer' }}
            >
              Cancelar
            </button>
            <button
              onClick={saveCatalog}
              disabled={saving}
              style={{ padding: '12px 20px', borderRadius: 10, border: 'none', background: '#fff', color: '#111', fontWeight: 700, cursor: 'pointer', opacity: saving ? 0.6 : 1 }}
            >
              {saving ? 'Salvando...' : 'Salvar catálogo'}
            </button>
          </div>
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

      {/* Botão discreto de admin, no canto inferior direito */}
      <AdminFab onClick={openAdmin} title="Área administrativa">
        {adminOn ? '✕' : '⚙'}
      </AdminFab>

      {showLoginModal && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 300, padding: '1.5rem'
          }}
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
              style={{
                width: '100%', boxSizing: 'border-box', background: '#1a1a1a',
                border: `1px solid ${adminError ? '#e74c3c' : '#333'}`, borderRadius: 10,
                color: '#fff', fontSize: 16, padding: '14px', outline: 'none', marginBottom: 8
              }}
            />
            {adminError && <div style={{ fontSize: 12, color: '#e74c3c', marginBottom: 8 }}>Senha incorreta.</div>}
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <button
                onClick={() => setShowLoginModal(false)}
                style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid #333', background: '#1a1a1a', color: '#fff', cursor: 'pointer' }}
              >
                Cancelar
              </button>
              <button
                onClick={checkAdminPass}
                style={{ flex: 1, padding: 12, borderRadius: 10, border: 'none', background: '#fff', color: '#111', fontWeight: 700, cursor: 'pointer' }}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
