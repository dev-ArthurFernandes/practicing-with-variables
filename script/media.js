function buscar_aluno(){
    
    document.getElementById("id_do_aluno").value = Math.floor(Date.now() * Math.random()).toString(36)

    min = 1000000
    max = 9999999

    document.getElementById("matricula_do_aluno").value = Math.floor(Math.random() * (max - min + 1)) + min


}

/* Matemática */

function calcular_nota_media_de_matematica(){
    
    let nota_da_matematica = document.getElementById("matematica_nota").value     

    if(nota_da_matematica > 10){
        alert("Nota inserida invalida")
    }
    else{
        media_nota_da_matematica = 100 * nota_da_matematica / 10

        document.getElementById("matematica_media_nota").value = media_nota_da_matematica
    }
}

function calcular_presenca_media_de_matematica(){
    let presenca_de_matematica = document.getElementById("matematica_presenca").value

    if(presenca_de_matematica > 50){
        alert("Nota inserida invalida")
    }
    else{
        media_presenca_da_matematica = 100 * presenca_de_matematica / 50

        document.getElementById("matematica_media_presenca").value = media_presenca_da_matematica
    }
}

/* Português */

function calcular_nota_media_de_portugues(){
    let nota_da_portugues = document.getElementById("portugues_nota").value 
    
    if(nota_da_portugues > 10){
        alert("Nota inserida invalida")
    }
    
    media_nota_da_portugues = 100 * nota_da_portugues / 10

    document.getElementById("portugues_media_nota").value = media_nota_da_portugues
}

function calcular_presenca_media_de_portugues(){
    let presenca_de_portugues = document.getElementById("portugues_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_portugues = 100 * presenca_de_portugues / 50

    document.getElementById("portugues_media_presenca").value = media_presenca_da_portugues
}

/* Informática */

function calcular_nota_media_de_informatica(){
    let nota_da_informatica = document.getElementById("informatica_nota").value 
    
    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_informatica = 100 * nota_da_informatica / 10

    document.getElementById("informatica_media_nota").value = media_nota_da_informatica
}

function calcular_presenca_media_de_informatica(){
    let presenca_de_informatica = document.getElementById("informatica_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_informatica = 100 * presenca_de_informatica / 50

    document.getElementById("informatica_media_presenca").value = media_presenca_da_informatica
}

/* Geografia */

function calcular_nota_media_de_geografia(){
    let nota_da_geografia = document.getElementById("geografia_nota").value 

    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_geografia = 100 * nota_da_geografia / 10

    document.getElementById("geografia_media_nota").value = media_nota_da_geografia
}

function calcular_presenca_media_de_geografia(){
    let presenca_de_geografia = document.getElementById("geografia_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_geografia = 100 * presenca_de_geografia / 50

    document.getElementById("geografia_media_presenca").value = media_presenca_da_geografia
}

/* Inglês */

function calcular_nota_media_de_ingles(){
    let nota_da_ingles = document.getElementById("ingles_nota").value 
    
    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_ingles = 100 * nota_da_ingles / 10

    document.getElementById("ingles_media_nota").value = media_nota_da_ingles
}

function calcular_presenca_media_de_ingles(){
    let presenca_de_ingles = document.getElementById("ingles_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_ingles = 100 * presenca_de_ingles / 50

    document.getElementById("ingles_media_presenca").value = media_presenca_da_ingles
}

/* História */

function calcular_nota_media_de_historia(){
    let nota_da_historia = document.getElementById("historia_nota").value 
    
    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_historia = 100 * nota_da_historia / 10

    document.getElementById("historia_media_nota").value = media_nota_da_historia
}

function calcular_presenca_media_de_historia(){
    let presenca_de_historia = document.getElementById("historia_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_historia = 100 * presenca_de_historia / 50

    document.getElementById("historia_media_presenca").value = media_presenca_da_historia
}

/* Filosofia */

function calcular_nota_media_de_filosofia(){
    let nota_da_filosofia = document.getElementById("filosofia_nota").value 
    
    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_filosofia = 100 * nota_da_filosofia / 10

    document.getElementById("filosofia_media_nota").value = media_nota_da_filosofia
}

function calcular_presenca_media_de_filosofia(){
    let presenca_de_filosofia = document.getElementById("filosofia_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_filosofia = 100 * presenca_de_filosofia / 50

    document.getElementById("filosofia_media_presenca").value = media_presenca_da_filosofia
}

/* Sociologia */

function calcular_nota_media_de_sociologia(){
    let nota_da_sociologia = document.getElementById("sociologia_nota").value 
    
    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_sociologia = 100 * nota_da_sociologia / 10

    document.getElementById("sociologia_media_nota").value = media_nota_da_sociologia
}

function calcular_presenca_media_de_sociologia(){
    let presenca_de_sociologia = document.getElementById("sociologia_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_sociologia = 100 * presenca_de_sociologia / 50

    document.getElementById("sociologia_media_presenca").value = media_presenca_da_sociologia
}

/* Literatura */

function calcular_nota_media_de_literatura(){
    let nota_da_literatura = document.getElementById("literatura_nota").value 

    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_literatura = 100 * nota_da_literatura / 10

    document.getElementById("literatura_media_nota").value = media_nota_da_literatura
}

function calcular_presenca_media_de_literatura(){
    let presenca_de_literatura = document.getElementById("literatura_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_literatura = 100 * presenca_de_literatura / 50

    document.getElementById("literatura_media_presenca").value = media_presenca_da_literatura
}

/* Educação Fisica */

function calcular_nota_media_de_ed_fisica(){
    let nota_da_ed_fisica = document.getElementById("ed_fisica_nota").value 
    
    if(presenca_de_portugues > 10){
        alert("Nota inserida invalida")
    }

    media_nota_da_ed_fisica = 100 * nota_da_ed_fisica / 10

    document.getElementById("ed_fisica_media_nota").value = media_nota_da_ed_fisica
}

function calcular_presenca_media_de_ed_fisica(){
    let presenca_de_ed_fisica = document.getElementById("ed_fisica_presenca").value

    if(presenca_de_portugues > 50){
        alert("Nota inserida invalida")
    }

    media_presenca_da_ed_fisica = 100 * presenca_de_ed_fisica / 50

    document.getElementById("ed_fisica_media_presenca").value = media_presenca_da_ed_fisica
}

function calcular_medias_do_aluno(){
    
    /* NOTA */

    let matematica_nota = Number(document.getElementById("matematica_nota").value)

    let portugues_nota = Number(document.getElementById("portugues_nota").value)

    let informatica_nota = Number(document.getElementById("informatica_nota").value)

    let geografia_nota = Number(document.getElementById("geografia_nota").value)

    let ingles_nota = Number(document.getElementById("ingles_nota").value)

    let historia_nota = Number(document.getElementById("historia_nota").value)

    let filosofia_nota = Number(document.getElementById("filosofia_nota").value)

    let sociologia_nota = Number(document.getElementById("sociologia_nota").value)

    let literatura_nota = Number(document.getElementById("literatura_nota").value)

    let ed_fisica_nota = Number(document.getElementById("ed_fisica_nota").value)

    /* PRESENÇA */
    
    let matematica_presenca = Number(document.getElementById("matematica_presenca").value)

    let portugues_presenca = Number(document.getElementById("portugues_presenca").value)

    let informatica_presenca = Number(document.getElementById("informatica_presenca").value)

    let geografia_presenca = Number(document.getElementById("geografia_presenca").value)

    let ingles_presenca = Number(document.getElementById("ingles_presenca").value)

    let historia_presenca = Number(document.getElementById("historia_presenca").value)

    let filosofia_presenca = Number(document.getElementById("filosofia_presenca").value)

    let sociologia_presenca = Number(document.getElementById("sociologia_presenca").value)

    let literatura_presenca = Number(document.getElementById("literatura_presenca").value)

    let ed_fisica_presenca= Number(document.getElementById("ed_fisica_presenca").value)

    /* VALIDANDO NOTA */

    if(matematica_nota > 0){
        nota1 = matematica_nota
    }else{
        nota1 = 0
    }
    if(portugues_nota > 0){
        nota2 = portugues_nota
    }else{
        nota2 = 0
    }
    if(informatica_nota > 0){
        nota3 = informatica_nota
    }else{
        nota3 = 0
    }
    if(geografia_nota > 0){
        nota4 = geografia_nota
    }else{
        nota4 = 0
    }
    if(ingles_nota > 0){
        nota5 = ingles_nota
    }else{
        nota5 = 0
    }
    if(historia_nota > 0){
        nota6 = historia_nota
    }else{
        nota6 = 0
    }
    if(filosofia_nota > 0){
        nota7 = filosofia_nota
    }else{
        nota7 = 0
    }
    if(sociologia_nota > 0){
        nota8 = sociologia_nota
    }else{
        nota8 = 0
    }
    if(literatura_nota > 0){
        nota9 = literatura_nota
    }else{
        nota9 = 0
    }
    if(ed_fisica_nota > 0){
        nota10 = ed_fisica_nota
    }else{
        nota10 = 0
    }

    /* VALIDANDO PRESENÇA */

    if(matematica_presenca > 0){
        presenca1 = matematica_presenca
    }else{
        presenca1 = 0
    }
    if(portugues_presenca > 0){
        presenca2 = portugues_presenca
    }else{
        presenca2 = 0
    }
    if(informatica_presenca > 0){
        presenca3 = informatica_presenca
    }else{
        presenca3 = 0
    }
    if(geografia_presenca > 0){
        presenca4 = geografia_presenca
    }else{
        presenca4 = 0
    }
    if(ingles_presenca > 0){
        presenca5 = ingles_presenca
    }else{
        presenca5 = 0
    }
    if(historia_presenca > 0){
        presenca6 = historia_presenca
    }else{
        presenca6 = 0
    }
    if(filosofia_presenca > 0){
        presenca7 = filosofia_presenca
    }else{
        presenca7 = 0
    }
    if(sociologia_presenca > 0){
        presenca8 = sociologia_presenca
    }else{
        presenca8 = 0
    }
    if(literatura_presenca > 0){
        presenca9 = literatura_presenca
    }else{
        presenca9 = 0
    }
    if(ed_fisica_presenca > 0){
        presenca10 = ed_fisica_presenca
    }else{
        presenca10 = 0
    }

    nota_do_aluno = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10) * 10

    media_do_aluno = nota_do_aluno / 10

    presenca_do_aluno = (presenca1 + presenca2 + presenca3 + presenca4 + presenca5 + presenca6 + presenca7 + presenca8 + presenca9 + presenca10) * 10

    media_de_presenca_do_aluno = presenca_do_aluno / 50

    document.getElementById("media_nota").value = media_do_aluno

    document.getElementById("media_presenca").value = media_de_presenca_do_aluno
    
}

function avaliar_aluno(){
    
    let nome_do_aluno = document.getElementById("nome_do_aluno").value

   /* NOTA */

   let nota1 = Number(document.getElementById("matematica_nota").value)

   let nota2 = Number(document.getElementById("portugues_nota").value)

   let nota3 = Number(document.getElementById("informatica_nota").value)

   let nota4 = Number(document.getElementById("geografia_nota").value)

   let nota5 = Number(document.getElementById("ingles_nota").value)

   let nota6 = Number(document.getElementById("historia_nota").value)

   let nota7 = Number(document.getElementById("filosofia_nota").value)

   let nota8 = Number(document.getElementById("sociologia_nota").value)

   let nota9 = Number(document.getElementById("literatura_nota").value)

   let nota10 = Number(document.getElementById("ed_fisica_nota").value)

   /* PRESENÇA */
   
   let presenca1 = Number(document.getElementById("matematica_presenca").value)

   let presenca2 = Number(document.getElementById("portugues_presenca").value)

   let presenca3 = Number(document.getElementById("informatica_presenca").value)

   let presenca4 = Number(document.getElementById("geografia_presenca").value)

   let presenca5 = Number(document.getElementById("ingles_presenca").value)

   let presenca6 = Number(document.getElementById("historia_presenca").value)

   let presenca7 = Number(document.getElementById("filosofia_presenca").value)

   let presenca8 = Number(document.getElementById("sociologia_presenca").value)

   let presenca9 = Number(document.getElementById("literatura_presenca").value)

   let presenca10= Number(document.getElementById("ed_fisica_presenca").value)

   nota_do_aluno = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10) * 10

    let media_do_aluno = nota_do_aluno / 10

    presenca_do_aluno = (presenca1 + presenca2 + presenca3 + presenca4 + presenca5 + presenca6 + presenca7 + presenca8 + presenca9 + presenca10) * 10

    let media_de_presenca_do_aluno = presenca_do_aluno / 50

    if(media_do_aluno > 80 && presenca_do_aluno > 80){
        alert(`A nota do aluno ${nome_do_aluno} é de ${media_do_aluno}% e sua presença é ${media_de_presenca_do_aluno}%: Aluno Aprovado!`)
    }
    else{
        alert(`A nota do aluno ${nome_do_aluno} é de ${media_do_aluno}% e sua presença é ${media_de_presenca_do_aluno}%: Aluno Reprovado!`)
    }
}