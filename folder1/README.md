---
title: folder1 README
sidebar: auto
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

[Home](/) <!-- Sends the user to the root README.md -->
[foo](/foo/) <!-- Sends the user to index.html of directory foo -->
[foo heading anchor](/foo/#heading) <!-- Anchors user to a heading in the foo README file -->
[foo - one](/foo/one.html) <!-- You can append .html -->
[foo - two](/foo/two.md) <!-- Or you can append .md -->

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

[[toc]]


#h1 

##h2

###h3

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::


#h1_1

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```


