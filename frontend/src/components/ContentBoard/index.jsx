import * as Styled from './styles.js'
import P from 'prop-types'
import { Card } from '../Card/index.jsx'

export const ContentBoard = () => {
    return (
        <Styled.Container>
            <Card heading="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna faucibus, dignissim quam vel, ullamcorper orci. Integer nec massa malesuada, fermentum diam vitae, fringilla ligula. Nullam feugiat quam augue, quis dictum justo bibendum vel. Nulla nisl urna, elementum eu odio at, accumsan maximus mi. Aenean eu ante efficitur, elementum urna nec, hendrerit nunc. Phasellus id maximus nisl. Maecenas euismod ipsum augue, quis dapibus ligula malesuada sed.</Card>
            <Card heading="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna faucibus, dignissim quam vel, ullamcorper orci. Integer nec massa malesuada, fermentum diam vitae, fringilla ligula. Nullam feugiat quam augue, quis dictum justo bibendum vel. Nulla nisl urna, elementum eu odio at, accumsan maximus mi. Aenean eu ante efficitur, elementum urna nec, hendrerit nunc. Phasellus id maximus nisl. Maecenas euismod ipsum augue, quis dapibus ligula malesuada sed.</Card>
            <Card heading="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna faucibus, dignissim quam vel, ullamcorper orci. Integer nec massa malesuada, fermentum diam vitae, fringilla ligula. Nullam feugiat quam augue, quis dictum justo bibendum vel. Nulla nisl urna, elementum eu odio at, accumsan maximus mi. Aenean eu ante efficitur, elementum urna nec, hendrerit nunc. Phasellus id maximus nisl. Maecenas euismod ipsum augue, quis dapibus ligula malesuada sed.</Card>
            <Card heading="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna faucibus, dignissim quam vel, ullamcorper orci. Integer nec massa malesuada, fermentum diam vitae, fringilla ligula. Nullam feugiat quam augue, quis dictum justo bibendum vel. Nulla nisl urna, elementum eu odio at, accumsan maximus mi. Aenean eu ante efficitur, elementum urna nec, hendrerit nunc. Phasellus id maximus nisl. Maecenas euismod ipsum augue, quis dapibus ligula malesuada sed.</Card>
        </Styled.Container>
    )
}

ContentBoard.propTypes = {
    children: P.node.isRequired
}

