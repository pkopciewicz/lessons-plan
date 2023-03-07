//import Teachers from "./Teachers"
//import Groups from "./Groups";
//import Settings from "./Settings";
import { useState } from "react"

let initialArreyOne = [3, 2, 2, 2, 3, 2, 1];
let initialArreyTwo = [3, 2, 1, 3, 2, 3, 0];
let initialArreyThree = [2, 1, 2, 2, 2, 2, 0];
let initialFirstYear = ['I a', 'I b', 'I c', 'I d', 'I e', 'I f'];
let initialSecoundYear = ['II a', 'II b', 'II c', 'II d', 'II e', 'II f'];
let initialThirdYear = ['III a', 'III b', 'III c', 'III d', 'III e', 'III f'];
let initialTeacher = {
    name: '',
    surname: '',
    subjectOne: '',
    subjectTwo: ''
}
let Subjects = ['Math', 'Physics', 'Biology', 'History', 'English', 'Chemistry', 'Art'];
let SubjectsCounter = new Array(Subjects.length).fill(0);

export default function Main() {
    //Teachers :
    const SubjectsSummary = Subjects.map((subject, id) => <p key={subject}>Number of {subject} teachers: {SubjectsCounter[id]}</p>)
    const SelectSubject = Subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)
    const [Teacher, setTeacher] = useState(initialTeacher)
    const [TeachersArrey, setTeachersArrey] = useState([]);
    function handleName(e) { setTeacher({ ...Teacher, name: e.target.value }) }
    function handleSurname(e) { setTeacher({ ...Teacher, surname: e.target.value }) }
    function handleSelectOne(e) { setTeacher({ ...Teacher, subjectOne: e.target.value }) }
    function handleSelectTwo(e) { setTeacher({ ...Teacher, subjectTwo: e.target.value }) }
    function handleAdd() {
        const newTeacher = {
            name: Teacher.name,
            surname: Teacher.surname,
            subjectOne: Teacher.subjectOne,
            subjectTwo: (Teacher.subjectOne === Teacher.subjectTwo) ? "" : Teacher.subjectTwo
        }
        const nextTeachersArrey = [...TeachersArrey.slice(), newTeacher]
        SubjectsCounter[Subjects.findIndex(S => S === newTeacher.subjectOne)]++;
        SubjectsCounter[Subjects.findIndex(S => S === newTeacher.subjectTwo)]++;
        setTeachersArrey(nextTeachersArrey);
        setTeacher(initialTeacher);
    }
    //Groups:
    const [firstYear, setFirstYear] = useState(0);
    const [secoundYear, setSecoundYear] = useState(0);
    const [thirdYear, setThirdYear] = useState(0);
    const [subjectArreyOne, setSubjectArreyOne] = useState(initialArreyOne);
    const [subjectArreyTwo, setSubjectArreyTwo] = useState(initialArreyTwo);
    const [subjectArreyThree, setSubjectArreyThree] = useState(initialArreyThree); function handleArreyOne(x, index) {
        const nextSubjectArreyOne = subjectArreyOne.map((element, i) => {
            if (i === index) {
                return x;
            }
            else {
                return element;
            }
        });
        setSubjectArreyOne(nextSubjectArreyOne);
    }
    function handleArreyTwo(x, index) {
        const nextSubjectArreyTwo = subjectArreyTwo.map((element, i) => {
            if (i === index) {
                return x;
            }
            else {
                return element;
            }
        });
        setSubjectArreyTwo(nextSubjectArreyTwo);
    }
    function handleArreyThree(x, index) {
        const nextSubjectArreyThree = subjectArreyThree.map((element, i) => {
            if (i === index) {
                return x;
            }
            else {
                return element;
            }
        });
        setSubjectArreyThree(nextSubjectArreyThree);
    }
    //Settings:
    const [lessonsCount, setLessonsCount] = useState(8)
    const [startingTime, setStartingTime] = useState('07:00')
    const [pause, setPause] = useState('00:10')
    function hanndleGenerate() {
        const PlanArrey = [];
        const Cell = {
            cellTime:'',
            cellClass: '',
            cellTeacher: '',
            cellSubject: ''
        }
        const sumOfFirstGroupSubjects = 0;
        const sumOfSecoundGroupSubjects = 0;
        const sumOfThirdGroupSubjects = 0;
        for (let i = 0; i < subjectArreyOne.length; i++) {
            sumOfFirstGroupSubjects = sumOfFirstGroupSubjects + subjectArreyOne[i];
            sumOfSecoundGroupSubjects = sumOfSecoundGroupSubjects + subjectArreyTwo[i];
            sumOfThirdGroupSubjects = sumOfThirdGroupSubjects + subjectArreyThree[i];
        }
        const GrNamesArrey = [];
        for (let i = 0; i < firstYear; i++) {
            GrNamesArrey.push(initialFirstYear)
        }
        for (let i = 0; i < secoundYear; i++) {
            GrNamesArrey.push(initialSecoundYear)
        }
        for (let i = 0; i < thirdYear; i++) {
            GrNamesArrey.push(initialThirdYear)
        }
        //Math', 'Physics', 'Biology', 'History', 'English', 'Chemistry', 'Art'
        const mathTeachers = TeachersArrey.filter(obj=>(obj.subjectOne||obj.subjectTwo)==='Math')
        const physicTeachers=TeachersArrey.filter(obj=>(obj.subjectOne||obj.subjectTwo)==='Physics')
        const biologyTeachers=TeachersArrey.filter(obj=>(obj.subjectOne||obj.subjectTwo)==='Biology')
        const historyTeachers=TeachersArrey.filter(obj=>(obj.subjectOne||obj.subjectTwo)==='Historyh')
        const englishTeachers=TeachersArrey.filter(obj=>(obj.subjectOne||obj.subjectTwo)==='English')
        const chemistryTeachers=TeachersArrey.filter(obj=>(obj.subjectOne||obj.subjectTwo)==='Chemistry')
        const artTeachers=TeachersArrey.filter(obj=>(obj.subjectOne||obj.subjectTwo)==='Art')
        

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < lessonsCount; j++) {
                for (let k = 0; k < (firstYear + secoundYear + thirdYear); k++) {
                    
                }
            }
        }
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <p>Teachers:</p>
                                <div>
                                    <form onSubmit={e => e.preventDefault()}>
                                        <input
                                            placeholder="Name"
                                            value={Teacher.name}
                                            onChange={handleName}
                                        />
                                        <br />
                                        <input
                                            placeholder="Surname"
                                            value={Teacher.surname}
                                            onChange={handleSurname}
                                        />
                                        <br />
                                        <select value={Teacher.subjectOne} onChange={handleSelectOne}>
                                            <option>-</option>
                                            {SelectSubject}
                                        </select>
                                        <select value={Teacher.subjectTwo} onChange={handleSelectTwo}>
                                            <option>-</option>
                                            {SelectSubject}
                                        </select>
                                        <br />
                                        <input type={"submit"} onClick={handleAdd} value={"Add"} />
                                    </form>
                                </div>
                                <br />

                                <br />
                                {TeachersArrey.name}
                                <br />
                                {SubjectsSummary}
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Groups:</p>
                                <form>
                                    <label>Set number of groups on 1' year
                                        <input
                                            min={1}
                                            max={6}
                                            type='number'
                                            value={firstYear}
                                            onChange={(e) => setFirstYear(e.target.value)}
                                        />
                                    </label>
                                    <br />
                                    <label>Set number of groups on 2' year
                                        <input
                                            min={1}
                                            max={6}
                                            type='number'
                                            value={secoundYear}
                                            onChange={(e) => setSecoundYear(e.target.value)}
                                        />
                                    </label>
                                    <br />
                                    <label>Set number of groups on 3' year
                                        <input
                                            min={1}
                                            max={6}
                                            type='number'
                                            value={thirdYear}
                                            onChange={(e) => setThirdYear(e.target.value)}
                                        />
                                    </label>
                                    <br /><br />
                                    <div>
                                        <p>1' year subjects:</p>
                                        <label>Math per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyOne[0]}
                                                onChange={(e) => handleArreyOne(e.target.value, 0)}
                                            />
                                        </label>
                                        <br />
                                        <label>Physic per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyOne[1]}
                                                onChange={(e) => handleArreyOne(e.target.value, 1)}
                                            />
                                        </label>
                                        <br />
                                        <label>Biology per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyOne[2]}
                                                onChange={(e) => handleArreyOne(e.target.value, 2)}
                                            />
                                        </label>
                                        <br />
                                        <label>History per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyOne[3]}
                                                onChange={(e) => handleArreyOne(e.target.value, 3)}
                                            />
                                        </label>
                                        <br />
                                        <label>English per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyOne[4]}
                                                onChange={(e) => handleArreyOne(e.target.value, 4)}
                                            />
                                        </label>
                                        <br />
                                        <label>Chemistry per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyOne[5]}
                                                onChange={(e) => handleArreyOne(e.target.value, 5)}
                                            />
                                        </label>
                                        <br />
                                        <label>Art per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyOne[6]}
                                                onChange={(e) => handleArreyOne(e.target.value, 6)}
                                            />
                                        </label>
                                    </div>
                                    <br />
                                    <div>
                                        <p>2' year subjects:</p>
                                        <label>Math per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyTwo[0]}
                                                onChange={(e) => handleArreyTwo(e.target.value, 0)}
                                            />
                                        </label>
                                        <br />
                                        <label>Physic per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyTwo[1]}
                                                onChange={(e) => handleArreyTwo(e.target.value, 1)}
                                            />
                                        </label>
                                        <br />
                                        <label>Biology per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyTwo[2]}
                                                onChange={(e) => handleArreyTwo(e.target.value, 2)}
                                            />
                                        </label>
                                        <br />
                                        <label>History per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyTwo[3]}
                                                onChange={(e) => handleArreyTwo(e.target.value, 3)}
                                            />
                                        </label>
                                        <br />
                                        <label>English per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyTwo[4]}
                                                onChange={(e) => handleArreyTwo(e.target.value, 4)}
                                            />
                                        </label>
                                        <br />
                                        <label>Chemistry per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyTwo[5]}
                                                onChange={(e) => handleArreyTwo(e.target.value, 5)}
                                            />
                                        </label>
                                        <br />
                                        <label>Art per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyTwo[6]}
                                                onChange={(e) => handleArreyTwo(e.target.value, 6)}
                                            />
                                        </label>
                                    </div>
                                    <br />
                                    <div>
                                        <p>3' year subjects:</p>
                                        <label>Math per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyThree[0]}
                                                onChange={(e) => handleArreyThree(e.target.value, 0)}
                                            />
                                        </label>
                                        <br />
                                        <label>Physic per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyThree[1]}
                                                onChange={(e) => handleArreyThree(e.target.value, 1)}
                                            />
                                        </label>
                                        <br />
                                        <label>Biology per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyThree[2]}
                                                onChange={(e) => handleArreyThree(e.target.value, 2)}
                                            />
                                        </label>
                                        <br />
                                        <label>History per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyThree[3]}
                                                onChange={(e) => handleArreyThree(e.target.value, 3)}
                                            />
                                        </label>
                                        <br />
                                        <label>English per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyThree[4]}
                                                onChange={(e) => handleArreyThree(e.target.value, 4)}
                                            />
                                        </label>
                                        <br />
                                        <label>Chemistry per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyThree[5]}
                                                onChange={(e) => handleArreyThree(e.target.value, 5)}
                                            />
                                        </label>
                                        <br />
                                        <label>Art per week:
                                            <input
                                                min={1}
                                                max={4}
                                                type='number'
                                                value={subjectArreyThree[6]}
                                                onChange={(e) => handleArreyThree(e.target.value, 6)}
                                            />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Settings:</p>
                                <form>
                                    <label>Maximum number of subjects per day:
                                        <input
                                            type='number'
                                            value={lessonsCount}
                                            onChange={(e) => setLessonsCount(e.target.value)}
                                        />
                                    </label>
                                    <br />
                                    <label>Set time when classes starts:
                                        <input
                                            type='time'
                                            value={startingTime}
                                            onChange={(e) => setStartingTime(e.target.value)}
                                        />
                                    </label>
                                    <br />
                                    <label>Set time of pauses:
                                        <input
                                            type='time'
                                            value={pause}
                                            onChange={(e) => setPause(e.target.value)}
                                        />
                                    </label>
                                    <br /><br />
                                    <button onClick={hanndleGenerate}>Generate plan!</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}