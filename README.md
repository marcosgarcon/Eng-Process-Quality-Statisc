# 🛠️ Eng Process & Quality - Painel de Controle

Um painel de controle moderno e intuitivo que integra 35 ferramentas de engenharia de processos e qualidade, desenvolvido em React com design profissional.

## ✨ Características

- **35 Ferramentas** organizadas em 12 categorias
- **Interface Escura** moderna e profissional
- **Navegação Lateral** sempre visível
- **Carregamento Dinâmico** das ferramentas
- **Design Responsivo** para diferentes dispositivos
- **Animações Suaves** e transições elegantes

## 🚀 Ferramentas Incluídas

### Qualidade
- 5 Porquês, 8D, APQP, FMEA, Ishikawa, MASP, MSA, PPAP, Root Cause Analysis, Sucata

### Organização
- 5S

### Controle
- CEP, Folha de Verificação

### Produção
- Controle de Injeção, Estamparia

### Produtividade
- Cronoanálise, SMED

### Gestão
- Dashboard de Indicadores, Gerenciador de Dashboards, Planejamento

### Análise
- Diagrama de Dispersão, Gap Analysis, Histograma, Matriz Esforço x Impacto, Matriz GUT, Pareto, SWOT

### Melhoria
- DMAIC, Kaizen

### Manutenção
- Manutenção

### Processos
- Mapeamento de Processos, VSM

### RH
- Treinamento

### Teste
- Test Integration

## 🛠️ Tecnologias

- **React 18** - Framework JavaScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+
- npm ou pnpm

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd painel-controle

# Instale as dependências
npm install
# ou
pnpm install

# Execute em modo de desenvolvimento
npm run dev
# ou
pnpm run dev

# Build para produção
npm run build
# ou
pnpm run build
```

## 🌐 Deploy no GitHub Pages

### Configuração Automática via GitHub Actions

1. **Faça o push do código para o GitHub**
2. **Vá para Settings > Pages no seu repositório**
3. **Selecione "GitHub Actions" como source**
4. **O arquivo `.github/workflows/deploy.yml` já está configurado**

### Configuração Manual

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Deploy dos arquivos da pasta `dist/` para o GitHub Pages**

## 📁 Estrutura do Projeto

```
painel-controle/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Ferramentas HTML e imagens
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes UI (shadcn)
│   │   └── PixSupportModal.jsx
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Ponto de entrada
├── dist/                 # Build de produção
└── README.md
```

## 💝 Apoie o Desenvolvedor

Gostou do projeto? Considere fazer uma contribuição via Pix!

**Desenvolvedor:** Marcos Garçon  
**Pix:** [Link do Pix](https://cobranca.c6pix.com.br/01K6NMMH8KQBJE6W0CF7ZM1CYJ)

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📞 Contato

**Desenvolvedor:** Marcos Garçon  
**Projeto:** Eng Process & Quality - Painel de Controle

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
