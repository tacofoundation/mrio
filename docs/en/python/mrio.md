# What is mrio?

## Overview

`mrio` is a Python package that extends rasterio to handle multi-dimensional and temporal COG files with a familiar, intuitive syntax. Built for Earth Observation people who need robust and **explicit** handling of n-dimensional data while maintaining a straightforward and efficient workflow.

::: info
The `mrio.open` function currently does not support all the features available
in `rasterio.open`. If you require specific functionality provided by `rasterio`,
you can use `rasterio.open` directly to perform those operations. Once complete,
save the intermediate results and switch to `mrio.open`.
:::

## Key Features

- Read and write multi-dimensional and temporal COG files.
- Compatible syntax with rasterio.
- Google Earth Engine-style interface for temporal operations.
- Built-in conversion from temporal COG to simple COG.
- Built-in file validation.
- Drag-and-drop support in QGIS and ArcGIS.
- It also includes all the functionality you expect from a standard GeoTIFF file.

# Installation

You can install the `mrio` library using `pip`:

```bash
pip install mrio
```

or via `conda`:

```bash
conda install -c conda-forge mrio
```

or from source:

```bash
git clone git@github.com:tacofoundation/mrio.git
cd mrio
pip install .
```

or directly from the GitHub repository:

```bash
pip install git+https://github.com/tacofoundation/mrio.git
```
