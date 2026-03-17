const LoadFunction = ()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response)=>response.json())
    .then((json)=>displayLesson(json.data))

}

const loadLevelWord=(id)=>{
    const url= `https://openapi.programming-hero.com/api/level/${id}`

    
    fetch(url)
    .then((response)=>response.json())
    
    .then((json)=>{
        const clickBtn=document.getElementById(`lesson-btn-${id}`);
        
       displayLevelWords(json.data) 
    })



};

const displayLevelWords=(words)=>{

    // 1. Create Container

    const wordContainer= document.getElementById('word-container');
    wordContainer.innerHTML="";

    // 2. Enter each word
    
    // // "id": 5,
    //   "level": 1,
    //   "word": "Eager",
    //   "meaning": "আগ্রহী",
    //   "pronunciation": "ইগার"

    words.forEach(word => {
        
        const card= document.createElement("div");
        card.innerHTML =`<div class="bg-white rounded-xl py-10 px-5 shadow-sm text-center space-y-4">

            <h2 class="text-2xl font-semibold">${word.word? word.word : "শব্দ পাওয়া যায়নি। "}</h2>
            <p>Meaning /Pronounciation</p>
            <h2 class="text-2xl font-semibold font-bangla">" ${word.meaning? word.meaning : "পাওয়া যায়নি"} / ${word.pronunciation? word.pronunciation : "পাওয়া যায়নি"}"</h2>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF] text-gray-500 hover:text-white"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF] text-gray-500 hover:text-white"><i class="fa-solid fa-volume-high"></i></button>
                
            </div>
        </div>
        
        `
        wordContainer.appendChild(card)
        
    });


}

const displayLesson=(lessons)=>{

    // 1. Create Container

    const levelContainer= document.getElementById('level-container');
    levelContainer.innerHTML="";
    // 2. Get into every lesson


    for(let lesson of lessons){
        // 3. create element
         const btnDiv= document.createElement('div')
        btnDiv.innerHTML=`
             <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class=" btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}<button>
            `
    // 4. Append into container
    levelContainer.appendChild(btnDiv); 

    }

    
   

}



LoadFunction();