export default function Sobre(){
  return(
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="containerSobre">
          <h1 className="titulos">Explicando o projeto</h1>
          <p className="txt">
            Somos um grupo empenhado em desenvolver um projeto inovador que atende ao desafio de criar uma solução para a geração de energia limpa. Inspirados por essa missão, tivemos a ideia de explorar a produção de hidrogênio verde por meio da quebra da molécula de água (processo conhecido como eletrólise). O hidrogênio gerado pode ser utilizado como uma fonte de energia sustentável, contribuindo para a redução de emissões de gases poluentes e promovendo um futuro mais ecológico e eficiente.
          </p>
          <p className="txt">
            Essa abordagem combina tecnologia de ponta com o compromisso ambiental, oferecendo uma alternativa viável para diversificar a matriz energética global.
          </p>
          <p className="txt">
            Optamos pelo hidrogênio como fonte de energia em vez de alternativas como a energia eólica ou solar devido à maior facilidade de armazenamento e transporte. Enquanto a energia gerada por painéis solares ou turbinas eólicas precisa ser transmitida por redes elétricas, o hidrogênio pode ser armazenado de forma eficiente e transportado em caminhões-tanque, de maneira similar à gasolina. Essa flexibilidade logística torna o hidrogênio uma solução mais prática para atender às demandas energéticas em locais remotos ou com infraestrutura limitada.
          </p>
          <p className="txt">
            Uma possível dúvida que pode surgir é: "O uso da água nesse processo pode levar à sua escassez no mundo?". Queremos esclarecer que isso não ocorrerá. No processo de uso do hidrogênio como combustível, a queima do hidrogênio não gera poluentes, mas sim vapor d'água. Esse vapor, ao se combinar com as moléculas de oxigênio presentes no ar, forma novamente água, reintegrando-a ao ciclo natural. Assim, o uso de água para a produção de hidrogênio verde é sustentável e não compromete os recursos hídricos do planeta.
          </p>
        </div>
      </div>
      <footer className="">
        <div className="">
        </div>
      </footer>
    </div>
  )
}
