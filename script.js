const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if(menu){
  menu.addEventListener('click',()=>{
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',open);
  });
}
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

const industries = {
  pharma:{
    label:'FARMACÉUTICO',
    title:'Trazabilidad y calidad en cada movimiento.',
    text:'Para productos de salud, la logística es parte del producto. Integramos procesos, infraestructura y control para responder a estándares de calidad y trazabilidad exigentes.',
    points:['✓ BPA / BPM / BPDyT','✓ Temperatura controlada','✓ Trazabilidad','✓ Procesos documentados']
  },
  consumer:{
    label:'CONSUMO MASIVO',
    title:'Velocidad y precisión donde el consumidor decide.',
    text:'Gestionamos operaciones que requieren flexibilidad, disponibilidad de inventario y respuesta rápida frente a campañas, promociones y cambios de demanda.',
    points:['✓ Picking y despacho','✓ Acondicionado y packing','✓ Distribución nacional','✓ Gestión de campañas']
  },
  cosmetic:{
    label:'COSMÉTICO',
    title:'Cuidado del producto desde el almacén.',
    text:'Soluciones para productos que necesitan una presentación impecable y procesos controlados desde la recepción hasta la entrega.',
    points:['✓ Almacenamiento especializado','✓ Acondicionado','✓ Control de inventario','✓ Distribución']
  },
  tech:{
    label:'TECNOLOGÍA',
    title:'Control para productos de alto valor.',
    text:'Diseñamos procesos con seguridad, trazabilidad y control de inventarios para operaciones tecnológicas que requieren visibilidad y precisión.',
    points:['✓ Seguridad','✓ Tracking','✓ Inventario por SKU','✓ Distribución']
  },
  chemical:{
    label:'QUÍMICOS',
    title:'Procesos diseñados alrededor del riesgo.',
    text:'Adaptamos infraestructura, seguridad y distribución a las características de la mercancía y a los requerimientos operativos de cada cliente.',
    points:['✓ Seguridad operacional','✓ Segregación','✓ Control documental','✓ Distribución']
  },
  animal:{
    label:'SALUD ANIMAL',
    title:'Especialización para una cadena que no puede fallar.',
    text:'Integramos almacenamiento, acondicionamiento y distribución para productos de salud animal, con procesos orientados a la trazabilidad.',
    points:['✓ BPA / BPDyT','✓ Temperatura controlada','✓ Trazabilidad','✓ Cobertura nacional']
  }
};
const tabs=document.querySelectorAll('.industry-tab');
tabs.forEach(tab=>tab.addEventListener('click',()=>{
  tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');
  const d=industries[tab.dataset.industry];
  document.querySelector('#industry-label').textContent=d.label;
  document.querySelector('#industry-title').textContent=d.title;
  document.querySelector('#industry-text').textContent=d.text;
  document.querySelector('#industry-points').innerHTML=d.points.map(x=>`<span>${x}</span>`).join('');
}));

document.querySelector('#quoteForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`Solicitud de cotización | ${f.get('company')}`);
  const body=encodeURIComponent(
`Hola equipo Signia,

Quiero solicitar una propuesta logística.

Nombre: ${f.get('name')}
Empresa: ${f.get('company')}
Correo: ${f.get('email')}
Teléfono: ${f.get('phone')}
Servicio: ${f.get('service')}

Detalle:
${f.get('message') || 'Sin detalle adicional.'}

Enviado desde la nueva web de Signia.`
  );
  window.location.href=`mailto:info@signialogistics.com?subject=${subject}&body=${body}`;
});

const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>10));
