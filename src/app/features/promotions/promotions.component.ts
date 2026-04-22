import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface PromoProject {
  name: string;
  district: string;
  image: string;
  description: string;
  price: string;
  projectLink: string;
  /** Texto legal específico del departamento en promoción */
  disclaimer: string;
}

// ── Disclaimers individuales por proyecto ──────────────────────────────────
const D: Record<string, string> = {
  lima15:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-701 en Proyecto Lima 15. Precio desde S/ 678,000.00. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  matiz:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-301 en Proyecto Matiz. Precio desde S/ 727,000.00. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  serena:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-709 en Proyecto Serena. Precio desde S/ 439,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 3,662.00; tasa de 8.5%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  florencia:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-1803 en Proyecto Florencia. Precio desde S/ 405,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 3,283.00; tasa de 8%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  central:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-403 en Proyecto Central. Precio desde S/ 764,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 6,256.00; tasa de 8%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  medina:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-902 en Proyecto Medina. Precio desde S/ 477,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 3,808.00; tasa de 8.25%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  taller:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-205 en Proyecto Taller. Precio desde S/ 554,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 4,652.00; tasa de 8.5%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  patioLaPaz:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-905 en Proyecto Patio La Paz. Precio desde S/ 337,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 2,633.00; tasa de 8.5%. Aplica a Bono BMS de S/. 14,100.00. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  real:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-1206 en Proyecto Real. Precio desde S/ 324,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 2,680.00; tasa de 8.2%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  savia:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-1401 en Proyecto Savia. Precio desde S/ 478,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 3,795.00; tasa de 8.17%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  amalfi:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-1303 en Proyecto Amalfi. Precio desde S/ 498,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 3,970.00; tasa de 8.23%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  escala:
    '(*) Válido del 1 de abril de 2026 al 30 de abril de 2026 o hasta agotar stock. ' +
    'Aplica para departamento A-201 en Proyecto Escala. Precio desde S/ 557,000.00. ' +
    'Financiamiento por 20 años con Banco Pichincha, con cuota inicial del 10%, ' +
    'cuota mensual desde S/ 4,290.00; tasa de 7.50%. No aplica a Bono BMS. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',

  marena:
    '(*) Válido hasta agotar stock o hasta el 30 de abril de 2026. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.',
};

@Component({
  selector: 'app-promotions',
  standalone: false,
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent {

  constructor() {}

  /** Proyectos destacados — 3 columnas */
  featuredPromos: PromoProject[] = [
    {
      name: 'Serena',
      district: 'San Miguel',
      image: '/images/projects/thumb-serena.jpg',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/439,000*',
      projectLink: '/apartment-sale/san-miguel/serena',
      disclaimer: D['serena']
    },
    {
      name: 'Florencia',
      district: 'Pueblo Libre',
      image: '/images/projects/thumb-florencia-home.jpg',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/405,000*',
      projectLink: '/apartment-sale/pueblo-libre/florencia',
      disclaimer: D['florencia']
    },
    {
      name: 'Central',
      district: 'Miraflores',
      image: '/images/projects/thumb-central-home.jpg',
      description: 'Tu depa de 3 ambientes con precio desde',
      price: 'S/764,000*',
      projectLink: '/apartment-sale/miraflores/central',
      disclaimer: D['central']
    }
  ];

  /** Más proyectos — 4 columnas */
  otherPromos: PromoProject[] = [
    {
      name: 'Lima 15',
      district: 'Miraflores',
      image: '/images/projects/thumb-lima15-home.png',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/678,000*',
      projectLink: '/apartment-sale/miraflores/lima15',
      disclaimer: D['lima15']
    },
    {
      name: 'Matiz',
      district: 'San Isidro',
      image: '/images/projects/thumb-matiz-home.png',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/727,000*',
      projectLink: '/apartment-sale/san-isidro/matiz',
      disclaimer: D['matiz']
    },
    {
      name: 'Serena',
      district: 'San Miguel',
      image: '/images/projects/thumb-serena.jpg',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/439,000*',
      projectLink: '/apartment-sale/san-miguel/serena',
      disclaimer: D['serena']
    },
    {
      name: 'Florencia',
      district: 'Pueblo Libre',
      image: '/images/projects/thumb-florencia-home.jpg',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/405,000*',
      projectLink: '/apartment-sale/pueblo-libre/florencia',
      disclaimer: D['florencia']
    },
    {
      name: 'Central',
      district: 'Miraflores',
      image: '/images/projects/thumb-central-home.jpg',
      description: 'Tu depa de 3 ambientes con precio desde',
      price: 'S/764,000*',
      projectLink: '/apartment-sale/miraflores/central',
      disclaimer: D['central']
    },
    {
      name: 'Medina',
      district: 'Jesús María',
      image: '/images/projects/thumb-medina-home.png',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/477,000*',
      projectLink: '/apartment-sale/jesus-maria/medina',
      disclaimer: D['medina']
    },
    {
      name: 'Taller',
      district: 'Miraflores',
      image: '/images/projects/thumb-taller.jpg',
      description: 'Tu depa de 1 ambiente con precio desde',
      price: 'S/554,000*',
      projectLink: '/apartment-sale/miraflores/taller',
      disclaimer: D['taller']
    },
    {
      name: 'Patio la paz',
      district: 'San Miguel',
      image: '/images/projects/thumb-patio-home.jpg',
      description: 'Tu depa de 3 ambientes con cuotas desde',
      price: 'S/2,633*',
      projectLink: '/apartment-sale/san-miguel/patio-la-paz',
      disclaimer: D['patioLaPaz']
    },
    {
      name: 'Real',
      district: 'La Victoria',
      image: '/images/projects/thumb-real-home.jpg',
      description: 'Tu depa de 2 ambientes con cuotas desde',
      price: 'S/2,680*',
      projectLink: '/apartment-sale/la-victoria/real',
      disclaimer: D['real']
    },
    {
      name: 'Savia',
      district: 'Pueblo Libre',
      image: '/images/projects/thumb-savia-home.jpg',
      description: 'Tu depa de 3 ambientes con precio desde',
      price: 'S/478,000*',
      projectLink: '/apartment-sale/pueblo-libre/savia',
      disclaimer: D['savia']
    },
    {
      name: 'Amalfi',
      district: 'San Miguel',
      image: '/images/projects/thumb-amalfi-home.jpg',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/498,000*',
      projectLink: '/apartment-sale/san-miguel/amalfi',
      disclaimer: D['amalfi']
    },
    {
      name: 'Escala',
      district: 'La Victoria',
      image: '/images/projects/thumb-escala-home.jpg',
      description: 'Tu depa de 3 ambientes con precio desde',
      price: 'S/557,000*',
      projectLink: '/apartment-sale/la-victoria/escala',
      disclaimer: D['escala']
    },
    {
      name: 'Marena',
      district: 'San Miguel',
      image: '/images/projects/thumb-marena-home.png',
      description: 'Tu depa de 1 ambiente con precio desde',
      price: 'S/297,000*',
      projectLink: '/apartment-sale/san-miguel/marena',
      disclaimer: D['marena']
    }
  ];

  
}
