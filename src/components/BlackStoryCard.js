import React from 'react'
import './BlackStoryCard.css'

function BlackStoryCard(props) {
    let plot = `Donec vestibulum, velit sed euismod semper, purus nunc tincidunt magna, non hendrerit massa turpis vitae felis. Ut eget sodales nisl, eu lacinia quam. Donec tincidunt nisl at urna vestibulum tempor. Proin imperdiet nec augue eget sagittis. Proin a dignissim metus. Pellentesque a massa turpis. Pellentesque finibus vel nunc sit amet malesuada. Mauris sodales, orci eu dictum iaculis, felis metus aliquam dolor, in consequat erat turpis in odio.`
    let reveal = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lobortis tortor. In sagittis, justo ac consequat aliquam, lectus lacus semper nunc, ac molestie nibh augue at dui. Fusce id leo ac leo placerat sollicitudin nec fermentum tortor. Vivamus egestas dui quam, vitae egestas nulla hendrerit non. Phasellus velit mauris, vulputate ac libero non, luctus commodo leo. Quisque imperdiet turpis eu arcu pretium, ut efficitur sapien bibendum. Morbi egestas, dolor vitae rhoncus tempus, arcu felis scelerisque mi, sed volutpat lectus dolor ac nisi. In placerat hendrerit gravida. Integer rhoncus tellus quis dictum aliquet. Phasellus metus urna, blandit non finibus vitae, venenatis ac eros. Aliquam malesuada nibh nisi, id sagittis mi mattis et. Quisque diam orci, fermentum in viverra vel, suscipit et tellus. Aenean sit amet augue molestie, vestibulum diam ut, dictum elit. Maecenas rhoncus felis eget auctor suscipit. Pellentesque nibh justo, vehicula id odio ut, commodo ornare sem.
    
    Duis consequat sagittis nulla porttitor commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis neque purus, at maximus ligula aliquam ac. Nullam id tempus augue, quis consectetur ex. Suspendisse erat velit, facilisis nec eros ut, condimentum fermentum mauris. Sed et turpis a ante suscipit interdum. Mauris lorem urna, tincidunt nec elementum in, dictum et dui. In consectetur iaculis maximus. Integer ut quam non leo aliquam scelerisque vitae sit amet diam. Praesent non orci dignissim, fermentum nulla in, congue augue. Pellentesque quis massa dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.`
    console.log(props)
    return (
        <div className="outerCard">
            <div className="innerCard">
                <div className="cardTitle">{props.data.name}</div>
                <div className="plot">{props.data.plot}</div>
                <div className="dividerGroup">
                    <div className="divider" />
                    <div className="divider" />
                    <div className="divider" />
                </div>
                <div className="plotReveal">{props.data.plotReveal}</div>
            </div>
        </div>
    )
}

export default BlackStoryCard;