# What is mrio?

::: warning
This is a proof-of-concept library, and many aspects, including the library itself and 
the tCOG and mCOG specifications, are expected to change based on feedback. It is not 
recommended for production use. If the community finds it valuable, we will focus on
delivering a cross-platform implementation via a [C++ GDAL driver](https://gdal.org/en/stable/api/gdaldriver_cpp.html).
:::

## Overview

`mrio` is a Python package that extends [rasterio](https://rasterio.readthedocs.io/en/stable/) to handle [mCOG](https://tacofoundation.github.io/mrio/en/specification/multidimensional-geotiff-specification.html) and [tCOG](https://tacofoundation.github.io/mrio/en/specification/temporal-geotiff-specification.html) files with a familiar, 
intuitive syntax.

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
