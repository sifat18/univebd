import { Container, Ratio } from 'react-bootstrap'

export default function ProfileUpdate() {
    return (
       
        <Container style={{ width: 900, height: 800 }}>
            <Ratio aspectRatio="16x9">
                <iframe title='resume' src="https://cv.unive.com.bd/editor" frameborder="0" allowFullScreen />
            </Ratio>
        </Container>
    )
}
