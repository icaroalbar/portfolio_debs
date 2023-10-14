import { ImagePage } from "@/components/ImagePage";

export default function Licitacoes() {
  return (
    <ImagePage 
      title="Curso de Capacitação para nova lei de licitações e contratos"
      description="Curso de capacitação para implementação da nova lei de licitações e contratos no município de Niterói"
      type="Estudo Analítico"
      local="Secretaria de Planejamento, Orçamento e Modernização da Gestão"
      folder="nova_lei_licitacoes"
      slideTotal={15}
      back='contratacoes'
    />
  )
}
