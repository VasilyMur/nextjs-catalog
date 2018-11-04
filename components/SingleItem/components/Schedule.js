import styled from 'styled-components';

class Schedule extends React.Component {
    render() {
        const { day, schedule } = this.props;
        const { open, close } = schedule;
        return (
            <Container>
                <div>{day.charAt(0).toUpperCase() + day.slice(1)}:</div>
                <div>{open} - {close}</div>
            </Container>
        )
    }
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid #EDEDED;
`;



export default Schedule;