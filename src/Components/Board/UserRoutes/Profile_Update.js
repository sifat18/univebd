import { Container, Ratio } from 'react-bootstrap'

export default function ProfileUpdate() {
    return (
        // <div className='text-center my-5'>
        //     Build your Profile <a href="http://13.232.138.201/" target='_blank' rel='external' className='text-decoration-none'> here</a>
        // </div>
        <Container style={{ width: 900, height: 800 }}>
            <Ratio aspectRatio="16x9">
                <iframe title='resume' src="https://cv.unive.com.bd/editor" frameborder="0" allowFullScreen />
            </Ratio>
        </Container>
    )
}
