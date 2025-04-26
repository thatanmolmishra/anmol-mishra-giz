
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import sdg1 from "@/components/src/sdg1.png";
import grun2 from "@/components/src/grun2.png";
import grun1 from "@/components/src/grun1.png";
import nss1 from "@/components/src/nss1.jpg";
import nss2 from "@/components/src/nss2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const achievements = [
  {
    image: sdg1,
    title: "Panelist — Chat with Purpose: Coding for SDGs",
    description: "I was featured as a youth panelist in *Chat with Purpose: Coding for SDGs*, a global session under the UN75 initiative organized by 1M1B in collaboration with AWS and SDG2030. The session garnered over 110K viewers and 15 million+ digital impressions. I shared insights on leveraging Scratch, ASCII, and unplugged coding to create tech-driven solutions aligned with the UN Sustainable Development Goals. The panel also included industry leaders like Sunil PP (Head of Education & NPOs, AWS India & South Asia) and Amit Nevatia (Education Program Lead, AWS).",
    organization: "Tech Excellence Awards",
    logo: "https://international-partnerships.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-05/sdg-wheel-landscape-white-bg_en.png?itok=XaUGogrB",
    gallery: [
      sdg1,
      "/src/components/src/sdg2.png",
    ]
  },
  {
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIWFRUXFxYaFxcXGBYVFxsbFx0XGBYXGhkYHSogGhslGxgWITEhJSkrLi4uGiAzODMtNygtMCsBCgoKDg0OGhAQGy8lHyYrLy4rLS0tLS0tLS0vLjUtLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLv/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBgECCAf/xABLEAABAwIEAwQFCgQCCAUFAAABAgMRAAQFEiExE0FRBiJhkRQyUnGBFyNUkqGxwdHS8AcVQuEWMyRDU2Jyk7LxRIKjs8IlNXODov/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAQQBBAIBBQAAAAAAAAABAhESAxMhMVEEIkFhFIGxcZGh0fD/2gAMAwEAAhEDEQA/APDaKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKK6PDI6DyFbBodB5CvT+P9nHe+jm+iukgyPZHkK2DKfZHkKfj/Y3vo5qorpbgJ9keQo4KfZHkKfj/Zd36OaaK6X4KfZHkKOCn2R5Cn4/2N36OaKK6X4KfZHkKzhp9keQp+P9jd+jmiiumOAn2R5Cjgj2R5Cp+P8AY3DmaiumenAHsjyFZ4A9keQps/Zd36OZqK6e4A9keQrYMJ9keQptfYzOYqK6Y4CfZHkKz6OPZHkKbX2MWzmKiun+APZHkKOAPZHkKbYzOYKK6f4A9keQrItx7I8hTbGZzBRXT/AHsjyFZFuPZHkKYDM5forp/wBHHsjyFHo6fZHkKmBcjl+iuoPR0+yPIUejp9keQpgMjl+iuoPR0+yPIVj0dPsjyFMBkcwUV096OPZHkKz6On2R5CpiMjmCiun/AEdPsjyFYLCfZHkKYjI5iorp/gJ9keQrNMRkI6K3CaUCa2CK91nzoSy1kJpTJWwRWyazYoQy1kJpbJWwRVsUJhNbhFKhNbhFYyKhLLRppUJrYJrLkikctZyUtlrIRWXMYjYNVuG6cZBWFs1nIosGqRyClsorPDrW5Rm6IhmsgUrFZCKZjEbBqtglKxWhQKzcHyNoSdQRyrXglJgVICxWoS6X7JJnSk3rQrBIFWPE7tphIUsEZiAB4ykH8aS/mNiptSWRmUhYJJjQCTXS1fJVJrgrFzhtv3s5MAjQI1nw0pFzDrRRkhSvjHl+nOrk1h9y60pYb9QmUlYIUDAIyny99JoxO4KYDJywBrKdgBpOnKlk2tgxvD7QhYATHeOm09f0FQ/Z9ppa4WoJ03CY+6pK4cJM5gvfQwn4aE/ZXjXpJXZ7vRzXuS/s1xK5fNyhtgkZQQeDPjqXRVk/wZ/VBHVs/m4KKntfQ3X5OYaKKK84ooooAooooAooooAooooAooooAooooAooooAr0nsP2KFwjjXCimzSrKhtEZ7hfJKQdEDmTz2rzUV3IYrzCfSUpkg0XaDSmmJMdUUUV2TPMFFFFAFFFFAFFFFAFFFFAFFFFAFFFFSxQUUVP4DYtXKFKuS4IhKQ2e9mI1BCubYVJHUTFXqhy7Zzt0jwmxW+oCFJJBB5g7TSSI/fOu+M4dPZiLt9tc2catErUB4gqCyPeVJB99Mldi8HP+sw223/ALG1H3KKPKuSnLwYcV5OLmLD2lVuMHP9Zt/sX+K69AR2GtOVk1/y3gf+pXr/ANLfiaf8gtrYc8H+SzquDZlGjqwZI1STs4PH34UOXYTHVN5D+SH01eWIsW1+XWnCDmSJCwrtBbdl7JA0YQfq/qJpzYdkbRteZtpIPtAa/wDMBP31O55JtRLQF09/pmP+XcdfnRXrDqEtoK8qSRyyI8+VFX3D2nlCJZirrhYSpaEZgDEIEbgTsJps52wJJ+Ybgid9uXcPL41yefSPpYM6URxXUuOI7qJHMJA3PInSK0cet0St1bWZ5Le6jyEgJ2U4RBUf+HTSQBVjvey1k2VKVYL7oMkOPCTHXiSR/wAIioRnsRbH1rd0e9ySfvV9teRyb6O+noQ+Wz3lzD0JUtWHzw/W/mF4FZTH9nw0wn+jpBHVUnzrxE9ibffIr/mED8K0PYa3/wB/6yP0qrUl4JPQj5PW8TxGzfQEnDwC4IhTVyFCPClrFdnevSUMAW7C3tEZgVqbCRIBMAnlz2rwU9hk/wC0UPrfpWNdhUJOZDh/5n6RWXqyXZV6SC6bPde0rNlbLs/5cQpNwh5RHeynKojXvawI8arbFrftmODmJtytCyCguJX873YMQc4OhBArz09ipe1+yn80n9urq32JQBBUnXmsnzzEVlzqVnb00FBcfue29qmGfRrTp4SthtQCjPzCpmff8PyqT7BWFtbu8ZFq0h0o0WE5iNf0rzDtpfPJtm20tKTxQpWZeX5uACcvP1hVz7F4q9wuE6woqCtUxIJyjkefStuO2ro5pyjOpotvp7fcgPDTmCUDb3Uwf7HuJlDlswQDuE5HE+SSRD8dA0odepq9OKAGtcO3OJ8Iv27SOFFopadUZLrSwEqcCdQpOUADxJ6VhLk6S1cTx++wtxhSm3UlCk6g9OoPiOnvqOUK7DvbINuB7I2okmCCAPgelc0dpkJF24hLZbQXFBCT/SkKOUnoYiBXo9NKTdM8XqKpWRcUUUV2OOIUUUUAUUUUAUUUUAUUUUAV3SgzXC9dytdsUOrClZSE6JHKtJmGKvX9tSARXk/a/tGLx5TiUltA0bSrcoB50vZdtHS4Qt8uaz3iN/APDVTRzs9kRcK11qn9m+1CbhKUuHKr/ex8D0qwcUVu0Y5NkqWZPftZ24Dbi0NEFxAhahrlMzlSdpqPuu2FyFrKHEupUZSVJGnwAOvLUcqTxntCm2cCG0cV5U50AwoJ8T4n2R4E1Xn8XfdcU4tQUskkk13UG1ycZTjF0z1YMXyd25Tr1CQo/ZUoztXNzcXN1c/NKu31INrf3LY+bcUnw5fcYrsfSoo8W7FOuwTpq84u9RJB5UVO4HiXEaBPOiuElZ2jLP4EbqzbWZ4YnrXgvyi3f0hvzP6qPlFu/pDfmf1VfxDC7q+bPh9t1vKXYINSnpPTWOnXl+tc9ntLfnQ3Dw/3VH/5VzU2neRJ6b62yPxezacSBfqyqH9ZSueeqi2n76ym+J0d7S3A/wCBaF/ghBqwHs4+RrcXJ+JJ++lE9mT/AHmXb9WnarclXHcZ2XyNb7Ojpi+lFcSvwkpA5C3SOP2huUkkC8Kf+JBP/QTU3/hn3n/5x/NWfkZP0hX1qcPyJbbro5pTwO9ybMrA8fkiaXON7Nc/SuonXtFb5/Rfurt5HB8OsdYrz5tpKs/ZVXZPyMH6X9Rr9VMbnsI68stl+3WDzQoHx1ArW5G3fZmot+RY8H/iW0oJ+cTl8amLDtHh1xolQ4m3rGPujTzqk41giratFvcvLuW5yPMMpVIGynAsKBB5jy5Vr/LLte7L3n/uV+upvyt21deOC21LXT47Oz7fsZbI6hPPyqCeXhTPrtssJPgVEA+eU1xriLF7bK+euHWRzyOqGo2Glaa3V3q4684T1U4T96q5fiLu/wCs65fzXH+RxgITV7KiPvNQdy9bBWSHC4fVPkatrX8QVetkZ/8AzB+9VZ/iVhrsJyMNJTqkoJ1CpA0qrP3uv4JvbS9xXb91u5IyMuK5ySmfrKB/GmWI2arYrDqQpLg9HdjVQzEZX0cjIE+UK6V4Tevi46bgO8cuLglKXlJ0UTskeqBsOXjVpbu7tBrjPC+ZS7r6VcH3+m6a+tM/lXD8ja4TuzNzQm3z3RDY4pfLcU4LpOqh/v7uHUk8xzCqlO1Ld06y/c8S6KmOM4A58lO5yWyU5gAlQgbbkEDnVbvnYrjC2E9kYo5btVwcS9gqH+MpC1vz31KJUtW5JJ3JNe5Fi1/+n/qqq+HXSUOILgchKgVNkQSATIUDuDG1ez8Rn+z/ANVOsS9z+jlLRwj/AF8nmtxhTSTHFSSOggz46/hUPijSUxlV3hvHvXl621aLKcpICiphBOokiVJBgHcbdKTxHASELbGcupAUQEkkAidcvLaZ5V6tLVbVN2eT1GnnplRorafhX1xHmTXStMUbooopQFFFFAFFFFAJmsp1rQ1pxBU4NURm1KtYaavVo8zqO8ajbR5STBMTXNKztdEJ2jS64UJcBKU6isiQY09b3Tz9wriLtHiNu3cvoN06lQccIHGexOJ9KA9ZfvVvvXvPa69eQu4cWpLSWlltKtJhK2kkz4EA/Gufrq6Wd68eZcXPnXs0YUm2efUlaaRNYRiTiH23StS3AQHlE6rVvJPVRkmrQpzMkKOUxrM18tXNghxpCrx5bnGStJbcKE5EGCQkA7mrZwE/Rj9dH5GtLXxJuR7P6eMdOKfZ+J41xbGyb7xum3Vf7oUn9/CrtcYItrDUuZSFrOVpcLcJRnUWygggpBnY76a1Sba4aOyGz+rZ/Ot7hjDVFS4LFZQygMrJJ4gytkpAbEdyMwJ6bVfqlxX+yfrPTXaf+iRsfRkHNw1hUQYUEgwf2KrlrcWCQQG2dCRqlsQP+EcqfjCR/s8T/wDO19tZFlc/QcV+Gbt37a7KSkcEq8kUx2Ht/wCm/wDx/ij9FYrFgfZ3bM+aFD8TWaJBO++9X7mNG1hbK/qCf+Efirw++xB5b5dupLLSW0pGdwNpEpBJAJjnXt9u9bj/AFg/5az+VeJ9octtiDzASFkBJORQUkEDQaggdK8/q8ZaUkpXZ29PCSpum6H36kVvkY+in66vyFHEY6Pj36/lUeq4ZkT1nRKf0rY3Vt9F/wCYn8q813+Tf6L6H2foX/uin7K1DzH0Uf8AMT+VR3p9uf8A7f43afyr31+/6x5V8vX1246Mk/ufV9PpYwrFIirjEbFJjtf+o396/wA64wps3FxHMn76z/Mn/oqfrq/KvUvodLy/9s86/kH/ANX+kIra2Clytp1YJBQRxTuc7SowwfcQZ8Kl3bcHeklqP/1GfKVn7a5+1HZqX5tSUq1tMznGaGvc0jbOn35Rpvpz6V7TaXkzmvZxyRzZxH8Sr1YW8QtCXTqSkSlaQATr4fGDXnfAn+ofrD8qc9pryQhXCUlSl94oUlZJJ1kqnbXSRUTlV7f2VSSEqoDA3Ya/vyrLay2FSQoTyI10Om3Op8WrUBOQkxGjgTv0goGnvpG4t2VKKs656u4ADrv3h06VHpxj2mbWtGXTK82CdwfwqP8ASldV/b+dW13A7aAkJWQAAPnCNAfDh6fCmdxgtoQQEqP/AO7+ahV9+5JIy/UQb7K1nPU/b+ZooWtIJAJmBoM0fZBmij9LH9/yVTo+iWHj0PKt05cbJTrl1UnqdNAaS55lHbXfprQ1dCe8nXxT+ld2zzhHkvdtdlMbGJpm26Tqbanly1qSxKxDbZWCokrSPVUkb69dxtUQ00lcTMfc1UmE0y1/wzufm29dJcV+NeyLFeMdjnfmRpqXPP1q9sS3pUqXJUj1F6u/iDeXLVtdqbUSUWktgawcz5J6aEBPnXXS5qPk46q4bIP/AApf/SX/AKzP6qif8KX/ANK/+q1+qrIvG7raMO+JT+VN3MZvf9g943CfyrSio9L/AGL5vov/APhe/wDpf/1WP1UHsbf/AEv/AOpb/q1U3O0F8NFWt2ffxP0pt/i+8/8AwV5/zT+unCFu3D9E8pXtyf8AQ/xXBXWw2sXL4W62lW6jpGh0UQabOYiA9dOcV3K682FxHEzF2dQCsg6efe86n2MTcS2htFnflaAIDsSgaDZQ5VEt3zkOlVm4CXFFXEfV3tSZ0cPMdau7L46fsTY/LfbG14VuuLXw0ZipSdATueQA3k8hVneYtP8AetR+P6q3TcXK3UpNndoSlOUJDogidYGXr41Xb12+aZW4xbvlawFFKnSSAToDCQNuvUVrKXwjKjH5YliV7brXmQmBrIKZgdO9G1QrzaJMafA068eVb3VklQBQFIUQeyFEwR05Gjh26hAcXlPLh5Sf/W121IxtJdnGUrexqWul/H9dbFwAbTPhrFKrLakApIzAkTxEDQ9ZB92lBQr/AHk/A6fiK7Ucb8Gxc8fhpW3HcMQQfHTlPvpkXh4j3/vwrUXB5J/fwqUM2SLfaEJuXFlKeGVnIggGCZUZO8jnGtTNxjGdQUWkxpqSkeElU6xz/GqgXZ/qT+xQ4UMkJUAZ/pTl0+O9LQsujXal8kZLpv7/AMRThuwaUS4641lGVQhPfBMkKIJMx93jUDbtoIJKUhHXeD0E9Om9RrCsoGetMmE+QfL/ABVptpSnFInL3jrOvcO/v5VZGrioQjLJ9nrFldZNsup5UyviUqSVDdMf9WhqCt8SQQdOcxM6xI03+ysPXBgZj03Pl4VhVySOUC2Ckr5J3P76/vao/FVIbucqVZkkkEH+lQKTHv2+NIHFP33v3386RdvifKpb8Ctdl3wa4wpTJDd+tjQhdyoLMDqUlI+PFNP7tsW5D9muSdVAKuQPi2RXnFtfZDOu89P0+6pH+ZOkd5IP/D+kfblrjKKkqOrUknaTLZddmLOfm7ZSZ696TH9q0/kLYJTwE8vW3+00y7N9rChXCfWpKyO6tWhPvKhvVs9KSrRLiSeoI/I/nXOcJLpo6RnF9NHljaW2X0qYQlSRskgkb+PKnhwG3P8AUn7am7i2Wk6pQfcgR9u9RVw2SPUAjnJP416INM8so1wR/wDJrb/cn94orP8ANH+hH/N/+NFXHyGX4Pf/AEt7+n7if31og3P+5/zU/wDvpt6OPZHkKz6OPZHkK9G455Ccm5/3P+Y7+ms5bn/c/wCZc/rpv6OPZHkKPRx7I8hTLyGItkuf938bn9dLWzdyZD1m2FRByXSZAO8ZTqaZ+jj2R5Cs+jD2R5CqpUvjsOI6TZ3ZIN2hCYnKbkQFcj8zGuvWk3LG9g59YM6FauhHVDBpH0YeyPIVn0YeyPIU37+g0OWEvQDcuJMkyi6Sfeuzkj4rI91KN2t8VDK+2qPWCrhcdNVNgaH5knoXhSBw8eyPIVj0ZPsjyFR65ddbBx2i12+F4ikJShwLbAICXHdAOX+kOxWVdnbxWYMt/WUXDpMnupVHj3tqb+ip9keQo9FT7I8hU/t9lvgVXYXgIzXCt/6Q5v7cuh099Md4ZIKuOOZl1w6dP9ZMeFPfRU+yPIVj0VPsjyFFySMRFu8Mf/8AEKG/+0d5b7LpRvD7tJlN42QdwXj/ANVdPPRU+yPIUeit+yPI/lUts1wiJXZ3P+2b5T30p58vSiavQnLLyfky65/7afvrn0VHsjyFY9ETyR5Cpt/2L+B7UZK/wjG1Mz84ueQzLkbct5/vptV6wB5BUm8fIPMPKAPvI1O8H9K9FT7I8hSVndJbUVaJ5c/CopeAcdHszhzIbe4IL8MlQggEeqRG3PXr0p5Y4TbP3D6Vvq4YcTCoE90CLZJ1iCFCfeK8ztcbt20htLqEpQIACgAANIAn/vUqe0tv9Ib/AKwrG39Gbx8IuvyS2n0l3/1lnX4pFaHsxZzHpKj7luH/AK0VQT2mt/pDf1hWP8U2/wBIb+sKbcvBNyPgvn+D7I7XakeDTyfy2pZns9YA/wCkOGOqXj/016UvtRb/AO0b+sK1PaW3/wBo19YVMJeB7kT52G2I5Xf/ANV8/c5/a1H+EbIttrS+rKFBSctyQSCAduLz8Kgj2ot/9o39YUfzRtRTm9xB/Y1VCS8C5eC2/wCCWGlaXl0kHl3QdPHKYo/wFgYMl13/AJbvP4caaqv8/bH+0b+sKz/N2/8AaN/WFT8d+SbkfBbU9g8C/wD3XE+9g/8AygsUmzsKWw42WL8LQlYCuKs5SDEg5jIjlVUOPN/7Rv6wrf8Anrf+0b+sKuECKUC4fyJv/auePEX+JrP8gbG924Pr3H6qqZ7Qoz97htROu7p2PKn6e0RP+sZ+uK1tsy1FJcV/RbD2ZtP9/wD9a4/+VNX+yto0uHAokRtxXfyGtVR3tKDyXH/Mb/TUPiFw+54kH476Vz1dJNXFHSEZXUi/fzXDkGFJdA8HFT9jg/CmT/ZNpUlL7keBcUP/AHDXnoxFZI9w8dTUkhbiEo0gbxr1mflXGTo9ELT7LJ/hponVV0f/ANt3/wCyisO9k2eS74+/0hX/AMaKm5FdGtx9E//Z",
    title: "Global 3rd Place Winner",
    description: "As part of the GRUEN initiative under the Erasmus+ Programme, I secured 3rd place globally among 100+ participants from Europe and Asia in a sustainability-focused design competition. I led research on urban environmental challenges in Indian cities and co-developed a scalable \"green city\" model, which was presented at the GRUEN eConference to an audience of 25+ policymakers, experts, and educators.",
    organization: "GRUEN : Green Urban Environments",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VnLZeFYxhX6MU1O9aWa3_rN596vduEdpeQ&s",
    gallery: [
      grun2,
      grun1,
    ]
  },
  {
    image: "https://www.nct.ac.in/assets/images/nss/nss-3.jpg",
    title: "NSS Volunteer",
    description: "As a dedicated NSS Volunteer, I contributed to over 15 community service initiatives including health camps, sanitation drives, and awareness campaigns, positively impacting more than 500 local residents. I led a team of 10+ volunteers during a focused NSS Camp on health and hygiene, earning recognition for leadership and meaningful community engagement.",
    organization: "National Service Scheme",
    logo: "https://trinitycollegejal.com/wp-content/uploads/2020/10/nss-logo.png",
    gallery: [
      nss1,
      nss2,
    ]
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-green-50">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-800"
        >
          Achievements
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Highlights of my professional recognition and awards. Click on each card to see more details.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Dialog key={achievement.title}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg shadow-md border border-green-100 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={achievement.logo}
                        alt={achievement.organization}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-medium text-green-700">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.organization}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-3">{achievement.description}</p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <img 
                      src={achievement.logo}
                      alt={achievement.organization}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{achievement.title}</h3>
                      <p className="text-green-600">{achievement.organization}</p>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-gray-700 mb-6">{achievement.description}</p>
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      {achievement.gallery.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              key={idx}
                              src={image}
                              alt={`Achievement gallery ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {achievement.gallery.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </>
                    )}
                  </Carousel>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/achievements">
            <Button variant="outline" className="bg-white hover:bg-green-50">
              View more Achievements
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
