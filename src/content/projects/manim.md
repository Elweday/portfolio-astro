---
dateTime: 2023-11-23T00:00:00Z
endDate: 2024-1-23T00:00:00Z
title: Mathematical Animations
description: Programatic Mathmatical Animations Using manim.
slug: manim
draft: false
tags:
  - OOP
  - graphics
  - animation
  - mathematics
  - GCP
  - cloud


stack:
  - python
  - ffmpeg
  - opengl
  - gcp

media:
  - "./images/manim.png"
---

Manim, short for Mathematical Animation Engine, is an open-source Python library developed by Grant Sanderson, the creator of the popular educational YouTube channel "3Blue1Brown." Manim is designed for creating high-quality mathematical animations which I personally liked and I've been a fan of since highschool.


## About Manim 
Manim is built on Python, leveraging the language's versatility and readability. 
- The object-oriented programming (OOP) paradigm serves as another essential pillar, providing a structured and modular framework for creating intricate animations. This design choice enhances code organization and encourages the development of reusable components.
- The rendering process, a critical aspect of any animation library, is where Manim excels. It seamlessly incorporates powerful tools like FFmpeg for video encoding, Pango for text rendering.
- Utilizing LaTeX, particularly in conjunction with packages like TikZ and visualizing it through Manim, has been a transformative experience that has deepened my appreciation for both typesetting and mathematical animation.

## History
- Classic Manim (Manim Community Edition): The original version, known as Classic Manim or Manim CE, was the first iteration of the library. It gained popularity for its mathematical animation capabilities.
- Manim GL (Manim OpenGL): The newer version, Manim GL, introduced improvements in terms of performance and extensibility. It utilizes modern graphics technologies like OpenGL to enhance rendering speed and capabilities.

## Intro To manim
here is an animation I picked from [manim docs](https://docs.manim.community/en/stable/tutorials/quickstart.html) showing the essence of manim.

```python
from manim import *
class AnimatedSquareToCircle(Scene):
    def construct(self):
        circle = Circle()  # create a circle
        square = Square()  # create a square

        self.play(Create(square))  # show the square on screen
        self.play(square.animate.rotate(PI / 4))  # rotate the square
        self.play(
            ReplacementTransform(square, circle)
        )  # transform the square into a circle
        self.play(
            circle.animate.set_fill(PINK, opacity=0.5)
        )  # color the circle on screen
```

<video class="rounded-lg" controls>
  <source src="https://docs.manim.community/en/stable/tutorials/AnimatedSquareToCircle2-1.mp4" type="video/mp4">
</video>


## Working with manim proffessionally
My first gig as a freelancer was to create manim animations for an educational platform.
### Responsibilities
 - Developed CLI tools and modular solutions to automate repetitive tasks, saving `20%` development time between iterating over the versions of the animation and rendering and testing which yielded in a productivity boost.
 - Applied OOP principles and advanced math to create visually compelling animations using `LaTeX`, ffmpeg, OpenGL, and Cairo, fostering immersive learning experiences.
 - Engineered Python packages for seamless integrations with various Cloud Services (`GCP`) APIs that uses a multitidue of gcp services like `AI` TTS and transcription, facilitating  streamlined workflows.
 - Optimized rendering algorithms to reduce rendering time by `70%`, ensuring faster loading times and enhanced user engagement.
 - Collaboratively developed and maintained Python packages, prioritizing code quality, modularity, and best practices.
