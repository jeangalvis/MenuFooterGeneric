export interface MenuItem {
  label: string;         // Texto que se muestra
  path?: string;         // Ruta si es un enlace directo
  icon?: string;         // Opcional: nombre del ícono
  children?: MenuItem[]; // Si tiene hijos => es un dropdown
  disabled?: boolean;    // Opcional: si el ítem está deshabilitado
}