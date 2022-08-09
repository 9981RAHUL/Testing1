import { LightningElement } from 'lwc';

export default class QuizApp_lwc extends LightningElement {
    myQuestion=[
        {   id:"Question1",
            question: "which one of the is not a template loop",
            answer:
            {
             a:"for:each",
             b:"iterator",
             c:"map loop"
            },
            correctAnswer:"c" 
        },
        {   id:"Question2",
            question: "which file is not available in lwc",
            answer:
            {
             a:".svg",
             b:".apex",
             c:".meta"
            },
            correctAnswer:"b" 
        },
        {   id:"Question3",
            question: "which one is not a indian state",
            answer:
            {
             a:"MP",
             b:"UP",
             c:"Bostan"
            },
            correctAnswer:"a" 
        }
    ]
}