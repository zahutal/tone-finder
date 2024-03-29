const productsMastertones = {
  cool: {
    name: 'cool',
    image: './img/faces/20CP-after.jpg',
    image_switch: './img/spacer.png',
    description: 'Zazwyczaj opalam się na czerwono',
    description_2: 'Niebieskie/fioletowe żyły pod skórą',
  },
  neutral: {
    name: 'neutral',
    image: './img/faces/80NN-after.jpg',
    image_switch: './img/spacer.png',
    description: 'Opalam się na brązowo, ale gdy jestem na słońcu za długo - na czerwono',
    description_2: 'Niebieskie/zielone żyły pod skórą',
  },
  warm: {
    name: 'warm',
    image: './img/faces/50WO-after.jpg',
    image_switch: './img/spacer.png',
    description: 'Zawsze opalam się na brązowo',
    description_2: 'Zielone/oliwkowe żyły pod skórą',
  },
};

const products = [
  {
    name: '10 Very Fair',
    name_code: '10',
    name_description: 'Very Fair',
    image: './img/faces/10CP-after.jpg',
    image_switch: './img/swatches/swatch10.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'pink',
            image: './img/faces/20PINK.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/10CP-before.jpg',
            image_after: './img/faces/10CP-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/10NN-before.jpg',
            image_after: './img/faces/10NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/10WY-before.jpg',
            image_after: './img/faces/10WY-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '20 Fair',
    name_code: '20',
    name_description: 'Fair',
    image: './img/faces/20NN-after.jpg',
    image_switch: './img/swatches/swatch20.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'pink',
            image: './img/faces/20PINK.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/20CP-before.jpg',
            image_after: './img/faces/20CP-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/20NN-before.jpg',
            image_after: './img/faces/20NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/20WY-before.jpg',
            image_after: './img/faces/20WY-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '30 Light',
    name_code: '30',
    name_description: 'Light',
    image: './img/faces/30NN-after.jpg',
    image_switch: './img/swatches/swatch30.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'pink',
            image: './img/faces/20PINK.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/30CP-before.jpg',
            image_after: './img/faces/30CP-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/30NN-before.jpg',
            image_after: './img/faces/30NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/30WY-before.jpg',
            image_after: './img/faces/30WY-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '40 Light-Medium',
    name_code: '40',
    name_description: 'Light-Medium',
    image: './img/faces/40CP-after.jpg',
    image_switch: './img/swatches/swatch40.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'pink',
            image: './img/faces/20PINK.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/40CP-before.jpg',
            image_after: './img/faces/40CP-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/40NN-before.jpg',
            image_after: './img/faces/40NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/40WY-before.jpg',
            image_after: './img/faces/40WY-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '50 Medium',
    name_code: '50',
    name_description: 'Medium',
    image: './img/faces/50CP-after.jpg',
    image_switch: './img/swatches/swatch50.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'pink',
            image: './img/faces/20PINK.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/50CP-before.jpg',
            image_after: './img/faces/50CP-after.jpg',
          },
          {
            name: 'green',
            image: './img/faces/60CG-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/50CG-before.jpg',
            image_after: './img/faces/50CG-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/50NN-before.jpg',
            image_after: './img/faces/50NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/50WY-before.jpg',
            image_after: './img/faces/50WY-after.jpg',
          },
          {
            name: 'orange',
            image: './img/faces/40WO-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/50WO-before.jpg',
            image_after: './img/faces/50WO-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '60 Medium-Dark',
    name_code: '60',
    name_description: 'Medium-Dark',
    image: './img/faces/60NN-after.jpg',
    image_switch: './img/swatches/swatch60.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'green',
            image: './img/faces/60CG-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/60CG-before.jpg',
            image_after: './img/faces/60CG-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/60NN-before.jpg',
            image_after: './img/faces/60NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/60WY-before.jpg',
            image_after: './img/faces/60WY-after.jpg',
          },
          {
            name: 'orange',
            image: './img/faces/40WO-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/60WO-before.jpg',
            image_after: './img/faces/60WO-after.jpg',
          },
          {
            name: 'red',
            image: './img/faces/91WR-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/60WR-before.jpg',
            image_after: './img/faces/60WR-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '70 Dark',
    name_code: '70',
    name_description: 'Dark',
    image: './img/faces/70WY-after.jpg',
    image_switch: './img/swatches/swatch70.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'blue',
            image: './img/faces/90CB-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/70CB-before.jpg',
            image_after: './img/faces/70CB-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/70NN-before.jpg',
            image_after: './img/faces/70NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/70WY-before.jpg',
            image_after: './img/faces/70WY-after.jpg',
          },
          {
            name: 'red',
            image: './img/faces/91WR-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/70WR-before.jpg',
            image_after: './img/faces/70WR-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '80 Deep',
    name_code: '80',
    name_description: 'Deep',
    image: './img/faces/80WY-after.jpg',
    image_switch: './img/swatches/swatch80.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'green',
            image: './img/faces/60CG-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/80CG-before.jpg',
            image_after: './img/faces/80CG-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/80NN-before.jpg',
            image_after: './img/faces/80NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'yellow',
            image: './img/faces/60WY-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/80WY-before.jpg',
            image_after: './img/faces/80WY-after.jpg',
          },
          {
            name: 'orange',
            image: './img/faces/40WO-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/80WO-before.jpg',
            image_after: './img/faces/80WO-after.jpg',
          },
          {
            name: 'red',
            image: './img/faces/91WR-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/80WR-before.jpg',
            image_after: './img/faces/80WR-after.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '90 Ultra Deep',
    name_code: '90',
    name_description: 'Ultra Deep',
    image: './img/faces/92NN-after.jpg',
    image_switch: './img/swatches/swatch90.jpg',
    children: [
      {
        name: 'cool',
        ref: productsMastertones.cool,
        children: [
          {
            name: 'blue',
            image: './img/faces/90CB-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/90CB-before.jpg',
            image_after: './img/faces/90CB-after.jpg',
          },
        ],
      },
      {
        name: 'neutral',
        ref: productsMastertones.neutral,
        children: [
          {
            name: 'neutral',
            image: './img/faces/31NN-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/90NN-before.jpg',
            image_after: './img/faces/90NN-after.jpg',
          },
        ],
      },
      {
        name: 'warm',
        ref: productsMastertones.warm,
        children: [
          {
            name: 'orange',
            image: './img/faces/40WO-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/90WO-before.jpg',
            image_after: './img/faces/90WO-after.jpg',
          },
          {
            name: 'red',
            image: './img/faces/91WR-after.jpg',
            image_switch: './img/spacer.png',
            image_before: './img/faces/90WR-before.jpg',
            image_after: './img/faces/90WR-after.jpg',
          },
        ],
      },
    ],
  },
];

export { products, productsMastertones };
