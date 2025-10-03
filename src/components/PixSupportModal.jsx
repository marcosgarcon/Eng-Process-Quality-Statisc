import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.jsx'
import { Heart, Coffee, Copy, ExternalLink, QrCode } from 'lucide-react'
import pixQrCode from '../assets/pix-qr-code.png'

export function PixSupportModal() {
  const [copied, setCopied] = useState(false)
  const pixLink = 'https://cobranca.c6pix.com.br/01K6NMMH8KQBJE6W0CF7ZM1CYJ'

  const copyPixLink = async () => {
    try {
      await navigator.clipboard.writeText(pixLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  const openPixLink = () => {
    window.open(pixLink, '_blank')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-gradient-to-r from-pink-500/20 to-red-500/20 border-pink-500/30 text-pink-300 hover:bg-pink-500/30 hover:border-pink-400 transition-all duration-200"
        >
          <Heart className="w-4 h-4 mr-2" />
          Apoie o Desenvolvedor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-cyan-400 flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            Apoie o Desenvolvedor
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Gostou do painel? Considere fazer uma contribuição via Pix para apoiar o desenvolvimento de mais ferramentas!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* QR Code */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
                <QrCode className="w-4 h-4" />
                QR Code Pix
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-white p-4 rounded-lg">
                <img 
                  src={pixQrCode} 
                  alt="QR Code Pix" 
                  className="w-48 h-48 object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Informações do Pix */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Beneficiário:</p>
                  <p className="text-sm text-slate-200 font-medium">Marcos Garçon</p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-400 mb-1">Valor:</p>
                  <p className="text-sm text-slate-200">Sem valor definido (você escolhe)</p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-400 mb-1">Data:</p>
                  <p className="text-sm text-slate-200">03/10/2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botões de Ação */}
          <div className="flex flex-col gap-2">
            <Button 
              onClick={openPixLink}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Abrir Link do Pix
            </Button>
            
            <Button 
              onClick={copyPixLink}
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Link Copiado!' : 'Copiar Link do Pix'}
            </Button>
          </div>

          {/* Mensagem de Agradecimento */}
          <div className="text-center p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
            <p className="text-xs text-slate-300">
              💙 Obrigado por considerar apoiar este projeto open source!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
