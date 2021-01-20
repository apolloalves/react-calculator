function CalculadoraService() {

    const SOMA = '+'
    const SUBTRACAO = '-'
    const MULTIPLICACAO = '*'
    const DIVISAO = '/'

    function calcular(numero1, numero2, operacao) {
        
        let resultado;
        switch( operacao ) {
            case SOMA: 
                resultado = numero1 + numero2; 
                break;

            case SUBTRACAO: 
                resultado = numero1 - numero2;
                break;
            
            case DIVISAO: 
                resultado = numero1 / numero2;
                break;

            case MULTIPLICACAO: 
                resultado = numero1 * numero2;
                break;
            
            default: 
            resultado = 0;
        }
        
        return resultado;
    }

    function concatenarNumero( numeroAtual, numConcat) {
        // caso contenha apenas '0' ou null, reinicia o valor
        if( numeroAtual === '0' || numeroAtual === null) {
            numeroAtual = '';
        }
        // primeiro digito for '.', concatena '0' antes do ponto
        if( numConcat === '.' && numeroAtual === '') {
            return '0.'
        }
        // caso '.' digitado e já contenha um ponto apenas retorne

        if( numConcat === '.' && numeroAtual.indexOf('.') > -1) {
            return numeroAtual;

        }

        return numeroAtual + numConcat;
    }

    return [
        calcular, 
        concatenarNumero,
        SOMA,
        SUBTRACAO, 
        DIVISAO,
        MULTIPLICACAO
    ];


}

export default CalculadoraService;