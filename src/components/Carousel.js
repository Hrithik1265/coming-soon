import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  const images = [
    "https://imgs.search.brave.com/ujI0RF0_xJekCGUoZPiSCeCRecqh6wtrlpWVixGdZuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDQv/Mjk5LzgzNS9zbWFs/bC9vbmxpbmUtc2hv/cHBpbmctb24tcGhv/bmUtYnV5LXNlbGwt/YnVzaW5lc3MtZGln/aXRhbC13ZWItYmFu/bmVyLWFwcGxpY2F0/aW9uLW1vbmV5LWFk/dmVydGlzaW5nLXBh/eW1lbnQtZWNvbW1l/cmNlLWlsbHVzdHJh/dGlvbi1zZWFyY2gt/ZnJlZS12ZWN0b3Iu/anBn",
    "https://imgs.search.brave.com/RtO-5bC-KU7CnSVmZ6YjyF-ILi7idRpnuD3qPmpQFt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDQv/ODU4LzAxMi9zbWFs/bC9vbmxpbmUtc2hv/cHBpbmctb24tcGhv/bmUtYnV5LXNlbGwt/YnVzaW5lc3MtZGln/aXRhbC13ZWItYmFu/bmVyLWFwcGxpY2F0/aW9uLW1vbmV5LWFk/dmVydGlzaW5nLXBh/eW1lbnQtZWNvbW1l/cmNlLWlsbHVzdHJh/dGlvbi1zZWFyY2gt/dmVjdG9yLmpwZw",
    "https://imgs.search.brave.com/hBor73H-qzKGL_ucAxaxRro0smFTi7UUPvIlCm6X89A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/NDkyLzg0MC9zbWFs/bC9vbmxpbmUtc3Rv/cmUtY29uY2VwdC1i/YW5uZXItaXNvbWV0/cmljLXN0eWxlLXZl/Y3Rvci5qcGc",
  ];

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide">
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
