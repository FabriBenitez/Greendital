'use client'

import { Minus, TrendingDown, TrendingUp } from 'lucide-react'
import { initialProducts } from '@/mockData'

interface TopProduct {
  id: string
  sku: string
  nombre: string
  categoria: string
  marca: string
  vendidosHoy: number
  vendidosMes: number
  precio: number
  margen: number
  stock: number
  trend: 'up' | 'down' | 'flat'
}

// Mapeo con tipos seguros para evitar errores de compilación
const topProducts: TopProduct[] = initialProducts.slice(0, 5).map((p) => ({
  id: String(p.id),
  sku: p.sku,
  nombre: p.name,
  categoria: p.category,
  marca: p.brand,
  vendidosHoy: p.id % 5 + 1, // Usamos una lógica fija basada en el ID para evitar errores de hidratación
  vendidosMes: p.soldMonthly || 0,
  precio: p.price,
  margen: Math.round(((p.price - p.cost) / p.cost) * 100),
  stock: p.stock,
  trend: 'up'
}))

function TrendIcon({ trend }: { trend: 'up' | 'down' | 'flat' }) {
  if (trend === 'up') return <TrendingUp size={14} className="text-success" />
  if (trend === 'down') return <TrendingDown size={14} className="text-destructive" />
  return <Minus size={14} className="text-muted-foreground" />
}

export default function TopProductsTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">Top Productos</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Mas vendidos — hoy y en el mes</p>
        </div>
        <span className="badge badge-primary">Semana actual</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Producto</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Categoria</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hoy</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mes</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Precio</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Margen</th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stock</th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">—</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {topProducts.map((product) => (
              <tr key={product.id} className="transition-colors hover:bg-muted/30">
                <td className="px-5 py-3.5">
                  <div>
                    <p className="max-w-[220px] truncate text-sm font-medium leading-snug text-foreground">{product.nombre}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{product.sku}</p>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <span className="badge badge-muted">{product.categoria}</span>
                </td>
                <td className="px-4 py-3.5 text-right font-mono font-semibold text-foreground">{product.vendidosHoy}</td>
                <td className="px-4 py-3.5 text-right font-mono font-semibold text-foreground">{product.vendidosMes}</td>
                <td className="px-4 py-3.5 text-right font-mono text-sm text-foreground">
                  {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(product.precio)}
                </td>
                <td className="px-4 py-3.5 text-right">
                  <span className={`font-mono text-sm font-semibold ${product.margen >= 35 ? 'text-success' : product.margen >= 25 ? 'text-foreground' : 'text-warning'}`}>
                    {product.margen}%
                  </span>
                </td>
                <td className="px-4 py-3.5 text-center">
                  <span className={product.stock <= 3 ? 'badge badge-warning' : 'badge badge-success'}>
                    {product.stock} u.
                  </span>
                </td>
                <td className="px-4 py-3.5 text-center">
                  <TrendIcon trend={product.trend} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
