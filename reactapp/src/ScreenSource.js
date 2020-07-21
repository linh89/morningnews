import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'

function ScreenSource() {
  const [sourceList, setsourceList] = useState([]);

  useEffect( () => {
    async function loadData() {
    	var rawResponse = await fetch('https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=861cf7c7016a44a3a5c64c07a0df0836');
      var response = await rawResponse.json();
      setsourceList(response.sources)
    }
    loadData()
  }, []);


  

  return (
    <div>
        <Nav/>
       
       <div className="Banner"/>

       <div className="HomeThemes">
          
              <List
                  itemLayout="horizontal"
                  dataSource={sourceList}
                  renderItem={ (source, i) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={`/images/${source.category}.png`} />}
                        title={<Link to={`/screenarticlesbysource/${source.id}`} key={i}>{source.name}</Link>}
                        description={source.description}
                      />
                    </List.Item>
                  )}
                />


          </div>
                 
      </div>
  );
}

export default ScreenSource;
