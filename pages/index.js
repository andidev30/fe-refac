import Head from 'next/head'

import {Container, Button, Image, Row, Col} from "react-bootstrap"
import { useMediaQuery } from 'react-responsive';

import NavbarCustom from "../components/NavbarCustom"
import dataPartner from "../data/partner.json"

export default function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div>
      <Head>
        <title>Home - Refactory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div id="hero-image" style={{backgroundColor: "#3e789f", minHeight: "100vh"}}>
          <Container>
            <NavbarCustom menu={["Home", "Courses", "custom training", "case studies", "blog" ]} />
            <Container style={isMobile ? {textAlign: "center", paddingTop: 50 } : {padding: "80px 100px 0px 50px" }}>
              <h1 style={{color: "white", fontWeight: "bold"}}>
                Empowering <span style={{color: "orange"}}>People</span><br /> Through Programming
              </h1>
              <h5 style={{color: "white", maxWidth: "50%", paddingTop: 10, fontWeight: 'inherit'}}>
                Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.
              </h5>
              <div style={{paddingTop: 20}}>
                <Button style={{ color: "white !important", marginRight: 20}} className="btn btn-warning rounded color-white">Temukan Solusi Anda</Button>
                <Button style={{color: "white !important"}} className="btn btn-outline-warning rounded">Tingkatkan Skill Anda</Button>
              </div>
              <div style={{marginTop: 50, textAlign: "center", color: "white",}}>
                <h3>PARTNER EKSLUSOF KAMI</h3>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 30}}>
                  {
                    dataPartner.data.map((partner) => (
                      <Image key={partner.id} height={50} src={partner.photo_url} />
                    ))
                  }
                </div>
              </div>
            </Container>

          </Container>
        </div>

        <div style={{marginTop: 80}}>
          <Container>
            <h2 style={{ fontWeight: "bold", textAlign: "center"}}>Apa Yang Refactory Dapat Bantu?</h2>
            <Row style={{marginTop: 40, textAlign: "center"}}>
              <Col md="6">
                <h4 style={{fontWeight: "bold"}}>Memperkuat Tim Engineer Anda</h4>
                <p style={{paddingTop: 10}}>
                  Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda.
                </p>
              </Col>
              <Col md="6">
                <h4>Memperkuat Tim Engineer Anda</h4>
                <p style={{paddingTop: 10}}>
                  Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{marginTop: 100, textAlign: "center"}}>
          <h6>INSIGHT TERBARU</h6>
          <h4 className="font-weight-bold pt-2">Knowledge Sharing</h4>
        </div>

        <div style={{backgroundColor: "grey", padding: 50, marginTop: 100}}>
          <h2 style={{textAlign: "center"}}>AS SEE ON</h2>
          <div style={{display: "flex", justifyContent: "center", paddingTop: "30px"}}> 
            {
              dataPartner.data.map((partner) => (
                <Image key={partner.id} height={isMobile ? 30 : 50} src={partner.photo_url} />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}
