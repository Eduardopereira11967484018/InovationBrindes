import type { Config } from 'tailwindcss';

const config: Config = {
  // Ativar o modo escuro com base em uma classe
  darkMode: ['class'],
  
  // Especificar os arquivos onde o Tailwind deve procurar classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Páginas
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Componentes
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Aplicação
  ],
  
  theme: {
    extend: {
      // Extensões para imagens de fundo
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Gradiente radial
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', // Gradiente cônico
      },
      
      // Extensões para bordas arredondadas
      borderRadius: {
        lg: 'var(--radius)', // Grande
        md: 'calc(var(--radius) - 2px)', // Médio
        sm: 'calc(var(--radius) - 4px)', // Pequeno
      },
      
      // Definições de cores
      colors: {
        background: 'hsl(var(--background))', // Cor de fundo
        foreground: 'hsl(var(--foreground))', // Cor de primeiro plano
        card: {
          DEFAULT: 'hsl(var(--card))', // Cor do cartão
          foreground: 'hsl(var(--card-foreground))', // Cor do texto do cartão
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))', // Cor do popover
          foreground: 'hsl(var(--popover-foreground))', // Cor do texto do popover
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Cor primária
          foreground: 'hsl(var(--primary-foreground))', // Cor do texto primário
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Cor secundária
          foreground: 'hsl(var(--secondary-foreground))', // Cor do texto secundário
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', // Cor atenuada
          foreground: 'hsl(var(--muted-foreground))', // Cor do texto atenuado
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Cor de destaque
          foreground: 'hsl(var(--accent-foreground))', // Cor do texto de destaque
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Cor destrutiva
          foreground: 'hsl(var(--destructive-foreground))', // Cor do texto destrutivo
        },
        border: 'hsl(var(--border))', // Cor da borda
        input: 'hsl(var(--input))', // Cor de entrada
        ring: 'hsl(var(--ring))', // Cor do anel
        chart: {
          '1': 'hsl(var(--chart-1))', // Cor do gráfico 1
          '2': 'hsl(var(--chart-2))', // Cor do gráfico 2
          '3': 'hsl(var(--chart-3))', // Cor do gráfico 3
          '4': 'hsl(var(--chart-4))', // Cor do gráfico 4
          '5': 'hsl(var(--chart-5))', // Cor do gráfico 5
        },
      },
      
      // Definições de keyframes para animações
      keyframes: {
        'accordion-down': {
          from: {
            height: '0', // Começa com altura 0
          },
          to: {
            height: 'var(--radix-accordion-content-height)', // A altura final
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)', // Começa com altura final
          },
          to: {
            height: '0', // A altura final é 0
          },
        },
      },
      
      // Definições de animações
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out', // Animação para abrir
        'accordion-up': 'accordion-up 0.2s ease-out', // Animação para fechar
      },
    },
  },
  
  // Plugins a serem utilizados
  plugins: [require('tailwindcss-animate')],
};

export default config;
