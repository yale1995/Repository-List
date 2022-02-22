import styled from 'styled-components'

export const Container = styled.div`

margin:2rem;


ul{
    list-style: none;

    li{

        border-bottom: 1px solid black;

        &+li{
        margin-top: 10px;
        }

        p{
            font-size:14px;
            margin-top:10px;
        }
        a{
            display:inline-block;
            margin-top:10px;
            text-decoration: none;
            color: #8257e6
        }



    }

    
}



`