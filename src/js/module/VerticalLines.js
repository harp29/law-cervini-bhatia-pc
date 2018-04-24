class VerticalLines{
    constructor(){

    }

    createLines(){
        let verticalLinesBox = document.querySelector('.vertical-lines-box'),
            line;

        for(let i = 1; i <= 6; i++){
            line = document.createElement('div');
            line.classList.add('vertical-lines');
            line.style.left = i * 20+'%';
            verticalLinesBox.append(line);
        }

    }
};

export default VerticalLines;