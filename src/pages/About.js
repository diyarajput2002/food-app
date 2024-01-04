import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
       <Box sx={{my:15,textAlign:"center",p:2,"&h4":{
        fontWeight:'bold',
        my:2,
        fontSize:'2rem',

       },
       "& p":{
        textAlign:"justify",
       },
       "@media (max-width:600px)":{
        mt:0,
       }
       }}>
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere exercitationem laborum laboriosam voluptatibus ipsum sunt temporibus itaque quibusdam reprehenderit incidunt quia, voluptatem veniam deserunt et suscipit iusto repudiandae vel aliquam? Deserunt quo totam laudantium ut a distinctio ea libero, iste, voluptas quod rem veritatis qui officia dolorem quos recusandae autem voluptatem facere, nihil tempore! Inventore, eaque! Quia hic officia dolorem? Facilis explicabo harum perspiciatis rem magnam laudantium eius sed odio molestiae? Commodi aut enim accusamus neque exercitationem sunt recusandae voluptatem! Eaque numquam, enim facilis mollitia odio nesciunt distinctio quibusdam doloremque omnis ducimus quo accusantium a nulla! Voluptate vel cumque eos!
        </p>
        <br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere exercitationem laborum laboriosam voluptatibus ipsum sunt temporibus itaque quibusdam reprehenderit incidunt quia, voluptatem veniam deserunt et suscipit iusto repudiandae vel aliquam? Deserunt quo totam laudantium ut a distinctio ea libero, iste, voluptas quod rem veritatis qui officia dolorem quos recusandae autem voluptatem facere, nihil tempore! Inventore, eaque! Quia hic officia dolorem? Facilis explicabo harum perspiciatis rem magnam laudantium eius sed odio molestiae? Commodi aut enim accusamus neque exercitationem sunt recusandae voluptatem! Eaque numquam, enim facilis mollitia odio nesciunt distinctio quibusdam doloremque omnis ducimus quo accusantium a nulla! Voluptate vel cumque eos!</p>
       </Box>
    </Layout>
  )
}

export default About;