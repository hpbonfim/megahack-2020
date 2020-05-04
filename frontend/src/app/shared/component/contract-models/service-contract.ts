const serviceContract = {
  title:
    '<h2 style="text-align: center;"><strong>CONTRATO DE PRESTAÇÃO DE SERVIÇOS (AUTÔNOMO)</strong></h2>',
  description:
    '<h4 style="text-align: center;"><strong>CONTRATO DE PRESTAÇÃO DE SERVIÇOS E HONORÁRIOS DE PROFISSIONAL AUTÔNOMO</strong></h4>',
  blocks: [
    {
      title: '<p style="text-align: center;"><strong>DAS PARTES</strong></p>',
      description:
        '<p><strong>Contratante: (Nome), (nacionalidade), (estado civil), (profissão)</strong>, portador da ' +
        'cédula de identidade R.G. nº<strong> {rgContratante:RG Contratante}</strong> e inscrito no CPF/MF nº <strong>{cpfContratante:CPF do Contratante}</strong>, residente e ' +
        'domiciliado na <strong>(Rua), (número), (bairro), (CEP), (Cidade), (Estado);​ ​</strong></p>' +
        '<p><br /><strong>Contratado: (Nome), (nacionalidade), (estado civil), (profissão), </strong>portador da cédula de ' +
        'identidade R.G. nº <strong>{rgContratado:RG Contratado} </strong>e inscrito no CPF/MF nº <strong>{cpfContratado:CPF/MF Contratado}, </strong>esidente e domiciliado na ' +
        '<strong>(Rua), (número), (bairro), (CEP), (Cidade), (Estado);​ ​</strong><br />​ <br />Pelo presente instrumento particular ' +
        'de prestação de serviços e honorários de profissional autônomo, têm entre si justos e acordados o que segue:</p>',
    },
    {
      title:
        '<p style="text-align: center;"><strong>DA AUTONOMIA PLENA DO CONTRATADO</strong></p>',
      description:
        '<p><strong>CLÁUSULA 1ª.</strong> O Contratado prestará o serviço contratado em plena autonomia, não ' +
        'havendo qualquer subordinação em relação à Contratante.</p><p><strong>CLÁUSULA 2ª.</strong> O próprio Contratado, ' +
        'na qualidade de prestador de serviços, estabelecerá e concretizará, cotidianamente, a forma de realização dos ' +
        'serviços pactuados no presente termo.</p><p><strong>CLÁUSULA 3ª.</strong> O Contratado, em razão de sua autonomia ' +
        'plena, pode prestar serviços para quais e quantos tomadores desejar, sem qualquer necessidade de solicitar qualquer ' +
        'autorização ou maifestação da Contratante, nesse sentido.</p><p><strong>CLÁUSULA 4ª.</strong> Em se tratando de relação ' +
        'comercial, sem vínculo empregatício, eventual falha, defeito ou imperfeição nos serviços serão aplicadas as ' +
        'cláusulas posteriores, à luz do Código Civil.</p><p><strong>CLÁUSULA 5ª.</strong> Tendo em vista a autonomia do ' +
        'Contratado, este poderá estabelecer sua própria jornada de trabalho, ficando responsável por eventuais atrasos, ' +
        'prorrogações ou negligência.</p>',
    },
    {
      title:
        '<p style="text-align: center;"><strong>DO OBJETO DO CONTRATO</strong></p>',
      description:
        '<p><strong>CLÁUSULA 6ª.</strong> O presente instrumento tem como objeto a prestação de serviços de ' +
        '<strong>{objetoContrato:Objeto do Contrato},</strong> SEM EXCLUSIVIDADE, sendo que, em sua vigência, o Contratado deve manter seu registro ' +
        'regularizado perante seu órgão de classe e cumprir as formalidades legais de sua profissão, se o exercício da ' +
        'função assim exigir, sob pena de ser considerado extinto o presente contrato.</p><p><strong>CLÁUSULA 7ª.</strong> ' +
        'O contratado executará os serviços diretamente à contratante, ou aos clientes por ela indicados.</p>',
    },
    {
      title: '<p style="text-align: center;"><strong>DOS SERVIÇOS</strong></p>',
      description:
        '<p><strong>CLÁUSULA 8ª.</strong> O contratado prestará os seguintes serviços<strong> ' +
        '(descrever detalhadamente os serviços prestados).</strong></p><p style="text-align: center;"><strong>DO PREÇO E ' +
        'DAS CONDIÇÕES DE PAGAMENTO</strong></p><p><strong>CLÁUSULA 9ª.</strong> O contratado perceberá, a título de ' +
        'honorários pelos serviços descritos na cláusula anterior, pagos pela Contratante, o valor de R$ {valor:Valor do Serviço} (Valor).</p>',
    },
    {
      title:
        '<p style="text-align: center;"><strong>DAS OBRIGAÇÕES</strong></p>',
      description:
        '<p><strong>CLÁUSULA 10ª.</strong> Fica estabelecido que são obrigações do CONTRATANTE:</p>' +
        '<p>a) Efetuar o pagamento, de acordo como estabelecido na cláusula terceira do presente contrato.</p>' +
        '<p>b) Fornecer para o Contratado, local adequado para desempenho de sua atividade.</p>' +
        '<p>c) Fornecer ao Contratado, materiais e informações, indispensáveis ao seu serviço.</p>' +
        '<p>d) Fica vedado ao Contratado, negociar abatimentos, descontos ou dilações de prazo para o pagamento dos ' +
        'serviços, sem o prévio conhecimento e autorização do Contratante.</p>' +
        '<p><strong>CLÁUSULA 11ª.</strong> Ficam estabelecidas as seguintes obrigações do <strong>CONTRATADO:</strong></p>' +
        '<p>a) Cumprir o estipulado nos termos do presente instrumento contratual.</p>' +
        '<p>b) Obedecer as instruções da Contratante, sobre os termos dos serviços a serem prestados aos clientes.</p>' +
        '<p>c) Prestar informações à Contratante, sempre que esta lhe solicitar, informando sobre a execução de seus ' +
        'serviços e demais detalhes sobre a execução de suas atividades.</p>' +
        '<p>d) Não revelar detalhes de suas atividades a terceiros, bem como informações sobre seus clientes.</p>' +
        '<p>e) Não intermediar abatimentos, descontos, ou dilações sem expressa autorização da Contratante.</p>',
    },
    {
      title:
        '<p style="text-align: center;"><strong>DO INADIMPLEMENTO, DO DESCUMPRIMENTO E DA MULTA</strong></p>',
      description:
        '<p><strong>CLÁUSULA 12ª.</strong> Em caso de inadimplemento por parte do CONTRATANTE quanto ao ' +
        'pagamento do serviço prestado, deverá incidir sobre o valor do presente instrumento, multa pecuniária de 2%, ' +
        'juros de mora de 1% ao mês e correção monetária.</p><p>Parágrafo único. Em caso de cobrança judicial, devem ' +
        'ser acrescidas custas processuais e 20% de honorários advocatícios.</p><p><strong>CLÁUSULA 13ª.</strong> ' +
        'No caso de não haver o cumprimento de qualquer uma das cláusulas, exceto a 9ª, do presente instrumento, a parte ' +
        'que não cumpriu deverá pagar uma multa de 10% do valor do contrato para a outra parte.</p>',
    },
    {
      title:
        '<p style="text-align: center;"><strong>DA RESCISÃO IMOTIVADA</strong></p>',
      description:
        '<p><strong>CLÁUSULA 14ª.</strong> Poderá o presente instrumento ser rescindido por qualquer uma das ' +
        'partes, em qualquer momento, sem que haja qualquer tipo de motivo relevante, não obstante a outra parte deverá ' +
        'ser avisada previamente por escrito, no prazo de {dtqDias:Quantidade de dias para a recisão} dias.<br /> ​ ​ ​<br /><strong>CLÁUSULA 15ª.</strong> Caso o ' +
        'CONTRATANTE já tenha realizado o pagamento pelo serviço, e mesmo assim, requisite a rescisão imotivada do presente ' +
        'contrato, terá o valor da quantia paga devolvido, deduzindo-se 2% de taxas administrativas.</p>' +
        '<p><strong>CLÁUSULA 16ª.</strong> Caso seja o CONTRATADO quem requeira a rescisão imotivada, deverá devolver a ' +
        'quantia que se refere aos serviços por ele não prestados ao CONTRATANTE, acrescentado de 2% de taxas administrativas.</p>',
    },
    {
      title: '<p style="text-align: center;"><strong>DO PRAZO</strong></p>',
      description:
        '<p><strong>CLÁUSULA 17ª.</strong> O CONTRATADO assume o compromisso de realizar o serviço dentro do ' +
        'prazo de <strong>{prazo:Prazo}(dias, semanas, meses, etc),</strong> de acordo com a forma estabelecida no presente contrato.</p>',
    },
    {
      title: '<p style="text-align: center;"><strong>DE FORO</strong></p>',
      description:
        '<p><strong>CLÁUSULA 18ª</strong>. Para dirimir quaisquer controvérsias oriundas do presente ' +
        'contrato, as partes elegem o foro da comarca de <strong>{comarca:Comarca}</strong>; <br /> ​ ​<br />E, assim por estarem ' +
        'justos e contratados assinam o presente de igual forma, teor, perante a testemunha abaixo:</p>' +
        '<p>(Assinatura eletrônica do Contratante) <br />(Assinatura eletrônica do Contratado) <br />(Assinatura digital do MiDeal)</p>',
    },
  ],
};

export default serviceContract;
