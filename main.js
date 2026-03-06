function Personagem(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia){
    this.nome = nome;
    this.codinome = codinome;
    this.armaPrincipal = armaPrincipal;
    this.armaSecundaria = armaSecundaria;
    this.velocidade = velocidade;
    this.forca = forca;
    this.resistencia = resistencia

    this.getNome = function(){
        return this.codinome;
    }
    this.getVelocidade = function(){
        return this.velocidade;
    }
    this.getForca = function(){
        return this.forca;
    }
    this.getResistencia = function(){
        return this.resistencia;
    }

    this.descricao = function(){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia + "\n"
        ;
    }
    Personagem.instances.push(this);
}

Personagem.instances = new Array();

function compararPersonagens(personagem1, personagem2){
    let stringHeader = `\n==============================\ncomparando personagens...\n${personagem1.getNome()} vs. ${personagem2.getNome()}\n\nDescrição de ${personagem1.getNome()}:\n${personagem1.descricao()}\n\nDescrição de ${personagem2.getNome()}:\n${personagem2.descricao()}\n\n`
    let string = "";
    let p1 = 0;
    let p2 = 0;
    
    if(personagem1.getVelocidade() > personagem2.getVelocidade()){
        string += `${personagem1.getNome()} é mais veloz\n`
        p1 += 1;
    }else if(personagem1.getVelocidade() == personagem2.getVelocidade()){
        string += `${personagem1.getNome()} e ${personagem2.getNome()} são equivalentes em velocidade\n`
    }else{
        string += `${personagem2.getNome()} é mais veloz\n`;
        p2 += 1;
    }

    if(personagem1.getForca() > personagem2.getForca()){
        string += `${personagem1.getNome()} é mais forte\n`
        p1 += 1;
    }else if(personagem1.getForca() == personagem2.getForca()){
        string += `${personagem1.getNome()} e ${personagem2.getNome()} são equivalentes em Força\n`
    }else{
        string += `${personagem2.getNome()} é mais forte\n`;
        p2 += 1;
    }

    if(personagem1.getResistencia() > personagem2.getResistencia()){
        string += `${personagem1.getNome()} é mais resistente\n`
        p1 += 1;
    }else if(personagem1.getResistencia() == personagem2.getResistencia()){
        string += `${personagem1.getNome()} e ${personagem2.getNome()} são equivalentes em resistencia\n`
    }else{
        string += `${personagem2.getNome()} é mais resistente\n`;
        p2 += 1;
    }

    if(p1 > p2){
        string += `\n${personagem1.getNome()} vence\n`
    }else if(p1 < p2){
        string += `\n${personagem2.getNome()} vence\n`
    }else{
        string += `Eles empataram\n`
    }

    return stringHeader + string + '\n==============================\n';
}

function compararLista(lista){
    let string = "";
    for(let i = 0; i < lista.length; i++){
        for(let j = i; j < lista.length; j++){
            if(lista[i] != lista[j]){
                string += compararPersonagens(lista[i], lista[j]);
            }
        }
    }
    return string;
}

const capitao = new Personagem("STeve Rogers", "Capitão América", "Escudo Americano", "", 85, 75, 80);
const homemDeFerro = new Personagem("Tony Stark", "Homem de Ferro", "Armadura Mark VII", "", 90, 95, 85);
const gaviaoArqueiro = new Personagem("Clint Barton", "GAvião Arqueiro", "Arco e Flechas", "", 70, 60, 65);
const viuvaNegra = new Personagem("Natasha Romanoff", "Viuva Negra", "MAnoplas da viúva", "", 75, 60, 70);
const hulk = new Personagem("Bruce Baner", "Hulk", "PUnhos", "", 80, 100, 100);
const thor = new Personagem("Thor", "Thor", "Mjolnir", "", 80, 90, 95);
const thanos = new Personagem("Thanos", "Thanos", "Manopla do Infinito", "Espada de dois gumes", 85, 100, 100);

console.log(compararLista(Personagem.instances));