import { useState } from 'react';
import './App.css';

function App() {
  const [laravelcc, setLaravelcc] = useState(0);
  const [reactcc, setReactcc] = useState(0);
  const [umlcc, setUmlcc] = useState(0);
  const [dbcc, setDbcc] = useState(0);
  const [cloudcc, setCloudcc] = useState(0);
  const [entrcc, setEntrcc] = useState(0);
  const [engcc, setEngcc] = useState(0);
  const [frcc, setFrcc] = useState(0);
  const [softcc, setSoftcc] = useState(0);
  const [culturcc, setCulturcc] = useState(0);
  const [agilecc, setAgilecc] = useState(0);

  

  const [laravelefm, setLaravelefm] = useState(0);
  const [reactefm, setReactefm] = useState(0);
  const [umlefm, setUmlefm] = useState(0);
  const [dbefm, setDbefm] = useState(0);
  const [cloudefm, setCloudefm] = useState(0);
  const [entrefm, setEntrefm] = useState(0);
  const [engefm, setEngefm] = useState(0);
  const [frefm, setFrefm] = useState(0);
  const [softefm, setSoftefm] = useState(0);
  const [culturefm, setCulturefm] = useState(0);
  const [agileefm, setAgileefm] = useState(0);

  const [stageentr, setStageentr] = useState(0);
  const [stagest, setStagest] = useState(0);
  const [pfe, setPfe] = useState(0);
  const [dis, setDis] = useState(10);

  return (
    <div className="App">
      <div>
      <table>
        <tr>
          <th>module</th>
          <th>cc/20</th>
          <th>efm/40</th>
          <th>moy/20</th>
        </tr>
        <tr>
          <td>
            LARAVEL
          </td>
          <td>
            <input type="number" value={laravelcc} onChange={(e)=>setLaravelcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={laravelefm} onChange={(e)=>setLaravelefm(e.target.value)}/>
          </td>
          <td>{(parseInt(laravelcc) + parseInt(laravelefm))/3}</td>
        </tr>
        <tr>
          <td>
            REACT JS
          </td>
          <td>
            <input type="number" value={reactcc} onChange={(e)=>setReactcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={reactefm} onChange={(e)=>setReactefm(e.target.value)}/>
          </td>
          <td>{(parseInt(reactcc) + parseInt(reactefm))/3}</td>
        </tr>
        <tr>
          <td>
            UML
          </td>
          <td>
            <input type="number" value={umlcc} onChange={(e)=>setUmlcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={umlefm} onChange={(e)=>setUmlefm(e.target.value)}/>
          </td>
          <td>{(parseInt(umlcc) + parseInt(umlefm))/3}</td>
        </tr>
        <tr>
          <td>
            DATABASE
          </td>
          <td>
            <input type="number" value={dbcc} onChange={(e)=>setDbcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={dbefm} onChange={(e)=>setDbefm(e.target.value)}/>
          </td>
          <td>{(parseInt(dbcc) + parseInt(dbefm))/3}</td>
        </tr>
        <tr>
          <td>
            CLOUD
          </td>
          <td>
            <input type="number" value={cloudcc} onChange={(e)=>setCloudcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={cloudefm} onChange={(e)=>setCloudefm(e.target.value)}/>
          </td>
          <td>{(parseInt(cloudcc) + parseInt(cloudefm))/3}</td>
        </tr>
        <tr>
          <td>
            entreprenariat
          </td>
          <td>
            <input type="number" value={entrcc} onChange={(e)=>setEntrcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={entrefm} onChange={(e)=>setEntrefm(e.target.value)}/>
          </td>
          <td>{(parseInt(entrcc) + parseInt(entrefm))/3}</td>
        </tr>
        <tr>
          <td>
            ENGLISH
          </td>
          <td>
            <input type="number" value={engcc} onChange={(e)=>setEngcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={engefm} onChange={(e)=>setEngefm(e.target.value)}/>
          </td>
          <td>{(parseInt(engcc) + parseInt(engefm))/3}</td>
        </tr>
        <tr>
          <td>
            french
          </td>
          <td>
            <input type="number" value={frcc} onChange={(e)=>setFrcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={frefm} onChange={(e)=>setFrefm(e.target.value)}/>
          </td>
          <td>{(parseInt(frcc) + parseInt(frefm))/3}</td>
        </tr>
        <tr>
          <td>
            soft skills
          </td>
          <td>
            <input type="number" value={softcc} onChange={(e)=>setSoftcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={softefm} onChange={(e)=>setSoftefm(e.target.value)}/>
          </td>
          <td>{(parseInt(softcc) + parseInt(softefm))/3}</td>
        </tr>
        <tr>
          <td>
            culture nemiric
          </td>
          <td>
            <input type="number" value={culturcc} onChange={(e)=>setCulturcc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={culturefm} onChange={(e)=>setCulturefm(e.target.value)}/>
          </td>
          <td>{(parseInt(culturcc) + parseInt(culturefm))/3}</td>
        </tr>
        <tr>
          <td>
            agile
          </td>
          <td>
            <input type="number" value={agilecc} onChange={(e)=>setAgilecc(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={agileefm} onChange={(e)=>setAgileefm(e.target.value)}/>
          </td>
          <td>{(parseInt(agilecc) + parseInt(agileefm))/3}</td>
        </tr>
        <tr>
        <th>module</th>
          <th>entreprise/60</th>
          <th>soutnance/40</th>
          <th>moy/20</th>
        </tr>
        <tr>
          <td>
            stage
          </td>
          <td>
            <input type="number" value={stageentr} onChange={(e)=>setStageentr(e.target.value)}/>
          </td>
          <td>
            <input type="number" value={stagest} onChange={(e)=>setStagest(e.target.value)}/>
          </td>
          <td>{(parseInt(stageentr) + parseInt(stagest))/5}</td>
        </tr>
        <tr>
        <th>module</th>
        <td></td>
          <th>soutnance/20</th>
          <th>moy/20</th>
        </tr>
        <tr>
          <td>
            pfe
          </td>
          <td></td>
          <td>
            <input type="number" value={pfe} onChange={(e)=>setPfe(e.target.value)}/>
          </td>
          <td>{parseInt(pfe)}</td>
        </tr>
        <tr>
        <th>module</th>
        <td></td>
          <th>disipline/20</th>
          <th>moy/20</th>
        </tr>
        <tr>
          <td>
            disipline
          </td>
          <td></td>
          <td>
            <input type="number" value={dis} onChange={(e)=>setDis(e.target.value)}/>
          </td>
          <td>{parseInt(dis)}</td>
        </tr>
      </table>
      </div>

      <div>
        <h3>total</h3>
        <p>
          {
            parseFloat(((parseInt(laravelcc) + parseInt(laravelefm))
            +(parseInt(reactcc) + parseInt(reactefm))
            +((parseInt(umlcc) + parseInt(umlefm))/3)
            +(((parseInt(dbcc) + parseInt(dbefm))/3)*2)
            +(((parseInt(cloudcc) + parseInt(cloudefm))/3)*2)
            +(((parseInt(entrcc) + parseInt(entrefm))/3)*2)
            +(((parseInt(engcc) + parseInt(engefm))/3)*2)
            +(((parseInt(frcc) + parseInt(frefm))/3)*2)
            +(((parseInt(agilecc) + parseInt(agileefm))/3)*2)
            +((parseInt(culturcc) + parseInt(culturefm))/3)
            +(((parseInt(stageentr) + parseInt(stagest))/5)*2)
            +((parseInt(pfe))*2)
            +(parseInt(dis)))/25).toFixed(2)
          } /20
        </p>
      </div>

      
      
    </div>
  );
}

export default App;
