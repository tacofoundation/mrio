<template>
    <section class="my-protomaps-snippet">
      <div class="content-wrapper">
        <div class="text-content">
          <h2 class="big-title">Quick Start</h2>
          <p>See mrio API in action:</p>
          <ul>
            <li>Create 5D data cubes from Sentinel-2 imagery (TOA/BOA, 2015-2024) as mCOG. <a href="./en/python/examples.html#writing-a-multidimensional-geotiff" class="arrow-link"><span class="arrow">→</span></a></li>
            <li>Build 4D Landsat time series (1984-2024) in <br> tCOG format. <a href="./en/python/examples.html#writing-a-temporal-geotiff" class="arrow-link"><span class="arrow">→</span></a></li>
          </ul>
        </div>
        
        <div class="code-content">
          <!-- Encabezado con el botón de copia -->
          <div class="code-header">
            <!-- <span class="language-label">Python</span> -->
            <!-- <button class="copy-button" @click="copyAllCode">
              {{ copied ? 'Copied!' : 'Copy' }}
            </button> -->
          </div>
  
          <!-- Bloques de código -->
          <pre><code class="language-python">{{ codeSnippet1 }}</code></pre>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import hljs from 'highlight.js/lib/core'
  import python from 'highlight.js/lib/languages/python'
  // Regístralo
  hljs.registerLanguage('python', python)
  
  // Importa el CSS del tema que gustes (monokai, dracula, etc.):
  import 'highlight.js/styles/monokai.css'
  
  // Definimos el contenido del snippet:
  const codeSnippet1 = `
  import mrio

  # Load dataset
  ic = mrio.Collection("https://huggingface.co/datasets/tacofoundation/mrio-examples/resolve/main/sentinel2_4D.tif")

  # Make a query
  tensor = ( 
      ic.select(["B01", "B02", "B03"])
        .FilterDate("2022-01-10", "2025-02-05")
        .FilterBounds(-0.430863, 39.491523)
        .getInfo()
  )

  tensor.shape
  `

  
  // Estado para el botón "Copy" -> "Copied!"
  const copied = ref(false)
  
  // Copia todo el código junto
  function copyAllCode() {
    const allCode = [codeSnippet1, codeSnippet2, codeSnippet3].join('\n')
    navigator.clipboard.writeText(allCode).then(() => {
      copied.value = true
      // Después de 2s volvemos a mostrar "Copy"
      setTimeout(() => {
        copied.value = false
      }, 2000)
    })
  }
  
  // Al montar, resaltamos todos los bloques <code> con highlight.js
  onMounted(() => {
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightElement(block)
    })
  })
  </script>
