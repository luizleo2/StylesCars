import { Container } from './styles';
import { Button } from '../../components/Button';
export function Home() {
    return (
        <Container>
          
            <div id="Sedan">
            
            <h1>Sedans</h1>

            <p>Lorem, ipsum dolor sit am
                et consectetur adipisicing elit. Ex delectus quas cumque id possimus, libero velit itaque, reprehenderit repellendus esse impedit soluta quibusdam aliquam f
                uga tempora veniam dolores, rem quia.
                </p>

                <Button />

            </div>

            <div id="Suvs">

                <h1>SUVS</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam sapiente ea sequi minus! Magni at aliquam explicabo quis tenetur perspiciatis, laboriosam quas face
                    re impedit esse doloribus ame
                    t nihil assumenda.</p>

                    <Button / >
            </div>

            <div id="Luxury">
                <h1>Luxury</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur rem nemo voluptatum eveniet necessitatibus, voluptatem facere! Nesciunt illum quibusdam eos veniam voluptatibus, i
                    ste at consequuntur quasi qui
                     rerum recusandae!</p>

                     <Button / >
            </div>
      
        </Container>
    )
}