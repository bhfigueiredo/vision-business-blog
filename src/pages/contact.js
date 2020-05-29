import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import styles from '../templates/contact.module.scss'
import contactImage from '../../static/avatar.png'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <article className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <img style={{ width: 800, height: 700 }} src={contactImage}/>
          <div className={styles.contactMessage}>
            <p className={styles.header}>ENVIA-ME UMA MENSAGEM</p>
            <p>Tens dúvidas sobre algum dos produtos, serviços ou artigos do site ou uma proposta que gostarias de me apresentar?</p> 
            <p>Preenche o formulário abaixo ou envia para <a href="mailto:visionbusiness@gmail.com">visionbusiness@gmail.com</a></p>
            <form method="post" action="https://www.flexyform.com/f/cc67be28e945cab9e59dddcef472f35d8f5b9195">
              <input type="text" name="name" placeholder="Nome" required />
              <input type="email" name="email" placeholder="E-mail" required />
              <textarea rows="5" name="message" placeholder="Mensagem" required />
              <button>Enviar</button>
            </form>
          </div>          
        </div>
      </article>
    </main>
  </Layout>
)
export default ContactPage
