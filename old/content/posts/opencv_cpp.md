---
title: "Using OpenCV with C++"
date: 2022-07-30T19:08:51+05:30
draft: false 
---
I ran into lots of issues trying to get the SFM example to work with C++, mostly linking errors. Installing Ceres and its dependencies was a breeze. The problem, however, was that the SFM libraries were not detecting Ceres, and so weren't being included. To fix it, I had to add:

```
#define CERES_FOUND 1
```

before I included the SFM libraries. This fixed the SFM issues but I still faced issues with the VIZ module, until I realized I just had not added that dependency to cmake. 

Why is cmake so unintuitive to use?

