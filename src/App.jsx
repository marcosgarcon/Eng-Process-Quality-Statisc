import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { 
  BarChart3, 
  Settings, 
  FileText, 
  TrendingUp, 
  Users, 
  Target, 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  Activity,
  Database,
  PieChart,
  LineChart,
  Gauge,
  Calendar,
  ClipboardList,
  Zap,
  ArrowLeft,
  Home
} from 'lucide-react'
import './App.css'

// Lista de todas as ferramentas disponíveis
const ferramentas = [
  { id: '5_porques', nome: '5 Porquês', icone: AlertTriangle, categoria: 'Qualidade', descricao: 'Análise de causa raiz' },
  { id: '5s', nome: '5S', icone: CheckCircle, categoria: 'Organização', descricao: 'Metodologia de organização' },
  { id: '8d', nome: '8D', icone: Target, categoria: 'Qualidade', descricao: 'Resolução de problemas' },
  { id: 'apqp', nome: 'APQP', icone: Settings, categoria: 'Qualidade', descricao: 'Planejamento avançado da qualidade' },
  { id: 'cep', nome: 'CEP', icone: LineChart, categoria: 'Controle', descricao: 'Controle estatístico de processo' },
  { id: 'controle_injecao', nome: 'Controle de Injeção', icone: Settings, categoria: 'Produção', descricao: 'Controle de injeção de plásticos' },
  { id: 'cronoanalise', nome: 'Cronoanálise', icone: Activity, categoria: 'Produtividade', descricao: 'Análise de tempos e métodos' },
  { id: 'DashboarddeIndicadores', nome: 'Dashboard de Indicadores', icone: BarChart3, categoria: 'Gestão', descricao: 'Dashboard de indicadores de sucata' },
  { id: 'diagrama-dispersao', nome: 'Diagrama de Dispersão', icone: PieChart, categoria: 'Análise', descricao: 'Análise de correlação' },
  { id: 'dmaic', nome: 'DMAIC', icone: TrendingUp, categoria: 'Melhoria', descricao: 'Metodologia Six Sigma' },
  { id: 'estamparia', nome: 'Estamparia', icone: Wrench, categoria: 'Produção', descricao: 'Controle de estamparia' },
  { id: 'fmea', nome: 'FMEA', icone: AlertTriangle, categoria: 'Qualidade', descricao: 'Análise de modos de falha' },
  { id: 'folha_verificacao', nome: 'Folha de Verificação', icone: ClipboardList, categoria: 'Controle', descricao: 'Coleta de dados estruturada' },
  { id: 'gap-analysis', nome: 'Gap Analysis', icone: Target, categoria: 'Análise', descricao: 'Análise de lacunas' },
  { id: 'GerenciadordeDashboards', nome: 'Gerenciador de Dashboards', icone: Database, categoria: 'Gestão', descricao: 'Gestão à vista' },
  { id: 'histograma', nome: 'Histograma', icone: BarChart3, categoria: 'Análise', descricao: 'Distribuição de frequência' },
  { id: 'ishikawa', nome: 'Ishikawa', icone: AlertTriangle, categoria: 'Qualidade', descricao: 'Diagrama de causa e efeito' },
  { id: 'kaizen', nome: 'Kaizen', icone: TrendingUp, categoria: 'Melhoria', descricao: 'Melhoria contínua' },
  { id: 'manutencao', nome: 'Manutenção', icone: Wrench, categoria: 'Manutenção', descricao: 'Gestão de manutenção' },
  { id: 'mapeamento-de-processos', nome: 'Mapeamento de Processos', icone: Activity, categoria: 'Processos', descricao: 'Mapeamento de fluxos' },
  { id: 'masp', nome: 'MASP', icone: Target, categoria: 'Qualidade', descricao: 'Metodologia de análise e solução de problemas' },
  { id: 'matriz-esforco-impacto', nome: 'Matriz Esforço x Impacto', icone: Target, categoria: 'Análise', descricao: 'Priorização de ações' },
  { id: 'matriz-gut', nome: 'Matriz GUT', icone: AlertTriangle, categoria: 'Análise', descricao: 'Gravidade, urgência e tendência' },
  { id: 'msa', nome: 'MSA', icone: Gauge, categoria: 'Qualidade', descricao: 'Análise do sistema de medição' },
  { id: 'pareto', nome: 'Pareto', icone: BarChart3, categoria: 'Análise', descricao: 'Análise de Pareto' },
  { id: 'planejamento', nome: 'Planejamento', icone: Calendar, categoria: 'Gestão', descricao: 'Planejamento estratégico' },
  { id: 'ppap', nome: 'PPAP', icone: CheckCircle, categoria: 'Qualidade', descricao: 'Processo de aprovação de peças' },
  { id: 'relatorio-a3', nome: 'Relatório A3', icone: FileText, categoria: 'Gestão', descricao: 'Relatório estruturado A3' },
  { id: 'root-cause-analysis', nome: 'Root Cause Analysis', icone: AlertTriangle, categoria: 'Qualidade', descricao: 'Análise de causa raiz' },
  { id: 'smed', nome: 'SMED', icone: Zap, categoria: 'Produtividade', descricao: 'Troca rápida de ferramentas' },
  { id: 'sucata', nome: 'Sucata', icone: AlertTriangle, categoria: 'Qualidade', descricao: 'Controle de sucata' },
  { id: 'swot', nome: 'SWOT', icone: Target, categoria: 'Análise', descricao: 'Análise estratégica' },
  { id: 'test-integration', nome: 'Test Integration', icone: Settings, categoria: 'Teste', descricao: 'Integração de testes' },
  { id: 'treinamento', nome: 'Treinamento', icone: Users, categoria: 'RH', descricao: 'Gestão de treinamentos' },
  { id: 'vsm', nome: 'VSM', icone: Activity, categoria: 'Processos', descricao: 'Mapeamento do fluxo de valor' }
]

// Agrupar ferramentas por categoria
const categorias = ferramentas.reduce((acc, ferramenta) => {
  if (!acc[ferramenta.categoria]) {
    acc[ferramenta.categoria] = []
  }
  acc[ferramenta.categoria].push(ferramenta)
  return acc
}, {})

function App() {
  const [ferramentaSelecionada, setFerramentaSelecionada] = useState(null)
  const [conteudoHtml, setConteudoHtml] = useState('')

  const carregarFerramenta = async (ferramenta) => {
    try {
      const response = await fetch(`/src/assets/${ferramenta.id}.html`)
      const html = await response.text()
      setConteudoHtml(html)
      setFerramentaSelecionada(ferramenta)
    } catch (error) {
      console.error('Erro ao carregar ferramenta:', error)
      setConteudoHtml('<p>Erro ao carregar a ferramenta.</p>')
    }
  }

  const voltarAoPainel = () => {
    setFerramentaSelecionada(null)
    setConteudoHtml('')
  }

  return (
    <div className="flex h-screen bg-slate-950">
      {/* Sidebar */}
      <div className="w-80 sidebar-gradient border-r border-slate-800 flex flex-col">
        {/* Header da Sidebar */}
        <div className="p-6 border-b border-slate-800 header-gradient">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Eng Process & Quality</h1>
              <p className="text-sm text-cyan-400">Painel de Controle</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">Desenvolvido por Marcos Garçon</p>
        </div>

        {/* Botão Voltar (quando ferramenta está selecionada) */}
        {ferramentaSelecionada && (
          <div className="p-4 border-b border-slate-800 slide-in-left">
            <Button 
              onClick={voltarAoPainel}
              variant="outline" 
              className="w-full justify-start gap-2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Painel
            </Button>
          </div>
        )}

        {/* Lista de Ferramentas */}
        <ScrollArea className="flex-1 p-4 custom-scrollbar">
          {!ferramentaSelecionada ? (
            <div className="space-y-6 fade-in">
              {Object.entries(categorias).map(([categoria, ferramentasCategoria]) => (
                <div key={categoria} className="slide-in-left">
                  <h3 className="category-header mb-3">
                    {categoria}
                  </h3>
                  <div className="space-y-2">
                    {ferramentasCategoria.map((ferramenta) => {
                      const IconeComponent = ferramenta.icone
                      return (
                        <Button
                          key={ferramenta.id}
                          onClick={() => carregarFerramenta(ferramenta)}
                          variant="ghost"
                          className="tool-card w-full justify-start gap-3 h-auto p-3 text-left"
                        >
                          <IconeComponent className="tool-icon w-5 h-5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-slate-200 truncate">
                              {ferramenta.nome}
                            </div>
                            <div className="text-xs text-slate-400 truncate">
                              {ferramenta.descricao}
                            </div>
                          </div>
                        </Button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 fade-in">
              <Card className="bg-slate-800/50 border-slate-700 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-cyan-400 flex items-center gap-2">
                    <ferramentaSelecionada.icone className="w-5 h-5" />
                    {ferramentaSelecionada.nome}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300 leading-relaxed">{ferramentaSelecionada.descricao}</p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                      {ferramentaSelecionada.categoria}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </ScrollArea>

        {/* Footer da Sidebar */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="text-xs text-slate-400 text-center">
            <div className="flex justify-between items-center">
              <span>Total: {ferramentas.length} ferramentas</span>
              <span>{Object.keys(categorias).length} categorias</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col">
        {ferramentaSelecionada ? (
          <div className="flex-1 iframe-container fade-in">
            <iframe
              srcDoc={conteudoHtml}
              className="w-full h-full border-0"
              title={ferramentaSelecionada.nome}
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="text-center max-w-lg fade-in">
              <div className="welcome-card p-8 mx-4">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Bem-vindo ao Painel de Controle
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Selecione uma ferramenta na barra lateral para começar a trabalhar com as soluções de engenharia de processos e qualidade.
                </p>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{ferramentas.length}</div>
                    <div className="text-slate-300">Ferramentas</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{Object.keys(categorias).length}</div>
                    <div className="text-slate-300">Categorias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
