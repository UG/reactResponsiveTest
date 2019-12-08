import React from 'react';

export default function samrtphone() {
    var html = `
    <br>
    <div class="center">
        <div class="yellowSmartphone">
            <div class="stepBoxVertical">
                <span class="circleStepVertical">1</span>
                <p>test text</p>
            </div>
            <div class="stepBoxVertical">
                <span class="circleStepVertical">2</span>
                <p>test text</p>
            </div>
            <div class="stepBoxVertical">
                <span class="circleStepVertical">3</span>
                <p>test</p>
            </div>
        </div>
    </div>
    `;
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}