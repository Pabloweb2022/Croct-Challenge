import styled from 'styled-components'

export const BodyContainer = styled.body`
height: 100vh;
width:100vw;
`
export const MainContainer = styled.main`
background-color: rgb(246, 247, 248);
height: 94%;
display: flex;
justify-content: space-between;
align-items: center;
.containerContent{
   padding-left: 10rem;
}
.title{
font-size: 2rem;
background-image: linear-gradient(to left, rgb(62, 145, 95),rgb(116, 137, 124),rgb(129, 131, 130));
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.subtitle{
   color: rgb(129, 131, 130);
   font-size: 1rem;
   margin-top: 1rem;
}
.buttonHome{
    margin-top: 1rem;
    height: 2.75rem;
    width: 9rem;
    border: none;
    border-radius: 6px;
    background-color:rgb(77,214, 132);
    cursor: pointer;
    color: rgb(129, 131, 130);
    transition: 0.5s;
    &:hover{
       background-color:rgb(62, 145, 95);
       color: white;
    }
}

.image{
 max-height:100%;
}

`

