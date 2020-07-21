import React, {useState, useEffect, state} from 'react';
import './App.css';
import { Card, Icon, Modal } from 'antd';
import Nav from './Nav'

const { Meta } = Card;

function ScreenArticlesBySource(props) {
  const [articleList, setArticleList] = useState([]);
  
  useEffect( () => {
    async function findArticle() {
    	var rawResponse = await fetch(`https://newsapi.org/v2/top-headlines?sources=${props.match.params.id}&apiKey=861cf7c7016a44a3a5c64c07a0df0836`);
      var response = await rawResponse.json();
      setArticleList(response.articles)
    }
    findArticle()
  }, []);
  
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  var showModal = (title, content) => {
    setVisible(true)
    setTitle(title)
    setContent(content)
  };

  var handleOk = e => {
    console.log(e);
    setVisible(false)
  };

  var handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  var newArticles = articleList.map((article, i) => {
    return (
      <div  style={{display:'flex',justifyContent:'center'}}>

                <Card
                  style={{ 
                  width: 300, 
                  margin:'15px', 
                  display:'flex',
                  flexDirection: 'column',
                  justifyContent:'space-between' }}
                  cover={
                  <img
                      alt="example"
                      src={article.urlToImage}
                  />
                  }
                  actions={[
                      <Icon type="read"  key="ellipsis" onClick={() => showModal(article.title, article.content)} />,
                      <Modal
                      title={title}
                      visible={visible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      >
                      <p>{content}</p>
                      
                      </Modal>,
                      <Icon type="like" key="ellipsis"/>
                  ]}
                  >

                  <Meta
                    title={article.title}
                    description={article.description}
                  />

                </Card>

              </div>
    )
  })

  

  return (
    <div>
         
            <Nav/>

            <div className="Banner"/>
            
              <div className="Card">
                {newArticles}
              </div> 

            </div>
  );
}

export default ScreenArticlesBySource;
