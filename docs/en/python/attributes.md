# Attributes

This section outlines the attributes associated with the 
[DatasetReader](https://github.com/tacofoundation/mrio-python/blob/708ce05b5cebbf38c2114399ed54c5b4b5769443/mrio/readers.py#L36) class. In addition to the standard attributes provided by the [rasterio](https://rasterio.readthedocs.io/en/stable/topics/reading.html) library, 
we introduce extended attributes for compatibility with [xarray](https://docs.xarray.dev/en/latest/generated/xarray.DataArray.html#xarray.DataArray) objects.

## Attributes from COG standard

### block_shapes

::: warning
The `block_shapes` in mrio is different from the `block_shapes` in rasterio.
:::

The `block_shapes` in rasterio returns a List of tuples of the block shapes for each band in 
the dataset. In mrio, we return just a tuple because, in multi-dimensional COG files, the 
block shapes are the same for all bands in the dataset. We keep the same name for consistency 
with the rasterio library.

```python
import mrio
mrio.read("example.tif").block_shapes
# >>> (256, 256)
```

### bounds

Returns the lower left and upper right bounds of the dataset in the units of its coordinate reference system. The returned values is a [namedtuple](https://docs.python.org/3/library/collections.html#collections.namedtuple) with the following fields: `left`, `bottom`, `right`, `top`.

```python
import mrio
mrio.read("example.tif").bounds
# >>> BoundingBox(left=0.0, bottom=0.0, right=1000.0, top=1000.0)
```

### compression

The compression method used for the dataset. The returned value is a enum of type `Compression`.
The possible values are: `jpeg`, `lzw`, `packbits`, `deflate`, `ccittrle`, `ccittfax3`, `ccittfax4`, `lzma`, `none`, `zstd`, `lerc`, `lerc_deflate`, `lerc_zstd`, `webp`, `jpeg2000`. Check the [rasterio compression documentation](https://rasterio.readthedocs.io/en/latest/api/rasterio.enums.html#rasterio.enums.Compression) for more information.

```python
import mrio
mrio.read("example.tif").compression.name
# >>> 'deflate'
```

### count

The number of raster bands in the dataset. The returned value is an integer.

```python
import mrio
mrio.read("example.tif").count
# >>> 120
```

### crs

The dataset’s coordinate reference system. In setting this property, the value may be a CRS object or an EPSG:nnnn or WKT string. The returned value is a [CRS](https://rasterio.readthedocs.io/en/latest/api/rasterio.crs.html#rasterio.crs.CRS) object. To get the EPSG code, use the `to_epsg()` method.

```python
import mrio
mrio.read("example.tif").crs.to_epsg()
# >>> 4326
```

### descriptions

The descriptions for each dataset band. This fields is always present in multi-dimensional COG files. The returned value is a list of strings.


```python
import mrio
mrio.read("example.tif").descriptions
# >>> ['band1__time1', __'band1__time2', 'band2__time1', 'band2__time2']
```

### driver

The name of the driver used to open the dataset. mrio only supports the `GTiff` driver. The returned value is a string. 

```python
import mrio
mrio.read("example.tif").driver
# >>> 'GTiff'
```

### dtypes

::: warning
The `dtypes` in mrio is different from the `dtypes` in rasterio.
:::

The `dtypes` in rasterio returns a List of strings of the data types for each band in the dataset. In mrio, we return just a string because in multi-dimensional COG files, the data types are the same for all bands in the dataset. We keep the same name for consistency with the rasterio library.

```python
import mrio
mrio.read("example.tif").dtypes
# >>> 'float32'
```

### gcps

Ground control points and their coordinate reference system. The returned value is a 2-tuple, or pair: (gcps, crs).

```python
import mrio
mrio.read("example.tif").gcps
# >>> ([], None)
```

### height

The height of the dataset in pixels. The returned value is an integer.

```python
import mrio
mrio.read("example.tif").height
# >>> 1000
```

### height

The width of the dataset in pixels. The returned value is an integer.

```python
import mrio
mrio.read("example.tif").width
# >>> 1000
```

### indexes

The indexes of the dataset bands. The returned value is a list of integers.

```python
import mrio
mrio.read("example.tif").indexes
# >>> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### interleaving

::: tip
from GDAL 3.11 also supports `tile` mode.
:::

The interleaving of the dataset. The returned value is an enum of type `Interleaving`. The possible values are: `band`, `pixel`, `line`. Check the [rasterio interleaving documentation](https://rasterio.readthedocs.io/en/latest/api/rasterio.enums.html#rasterio.enums.Interleaving) for more information.

```python
import mrio
mrio.read("example.tif").interleave.name
# >>> 'band'
```

### is_tiled

Whether the dataset is tiled. The returned value is a boolean.

```python
import mrio
mrio.read("example.tif").is_tiled
# >>> True
```

### mask_flag_enums

Sets of flags describing the sources of band masks. The possible values are: `all_valid`, `per_dataset`, `alpha`, `nodata`. The returned value is a list of enums of type `MaskFlags`. Check the [rasterio mask flags documentation](https://rasterio.readthedocs.io/en/latest/api/rasterio.enums.html#rasterio.enums.MaskFlags) for more information.

```python
import mrio
mrio.read("example.tif").mask_flag_enums[0][0].name
# >>> 'all_valid'
```

### meta

The rasterio basic metadata. The returned value is a dictionary.

```python
import mrio
mrio.read("example.tif").meta
# >>> {'driver': 'GTiff', 'dtype': 'float32', 'nodata': None, 'width': 1000, 'height': 1000, 'count': 120, 'crs': CRS.from_epsg(4326), 'transform': Affine(1.0, 0.0, 0.0, 0.0, -1.0, 1000.0)}
```

### name

The name of the file. The returned value is a string.

```python
import mrio
mrio.read("example.tif").name
# >>> 'example.tif'
```

### nodata

The nodata value for the dataset. The returned value is a float.

```python
import mrio
mrio.read("example.tif").nodata
# >>> None
```

### nodatavals

The nodata values for each band in the dataset. The returned value is a tuple of nodata values.

```python
import mrio
mrio.read("example.tif").nodatavals
# >>> (None, None, None, None, None, None, None, None, None, None)
```

### offsets

The offsets values for each band in the dataset. Do not confuse with the byte offsets. The returned value is a tuple of offsets.

```python
import mrio
mrio.read("example.tif").offsets
# >>> (0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
```

### options

A dictionary with the aditional parameters used to open the dataset. The returned value is a dictionary.

```python
import mrio
mrio.read("example.tif").options
# >>> {'engine': 'xarray'}
```

### photometric

::: warning
In multi-dimensional COG files, all dimensions are merged into the band space. Therefore, the photometric interpretation must always remain unspecified.
:::

The photometric interpretation of the dataset. The returned value is a enum of type `Photometric`. The possible values are: None, `black`, `cielab`, `cmyk`, `icclab`, `itulab`, `rgb`, `white`, `ycbcr`. Check the [rasterio photometric documentation](https://rasterio.readthedocs.io/en/latest/api/rasterio.enums.html#rasterio.enums.PhotometricInterp) for more information.

```python
import mrio
mrio.read("example.tif").photometric.name
# >>> None
```

### profile
The rasterio basic metadata and creation COG options. The returned value is a dictionary. Contrary to the `meta` attribute, the `profile` attribute includes the parameters used to create the COG file.

```python
import mrio
mrio.read("example.tif").profile
# >>> {'driver': 'GTiff', 'dtype': 'float32', 'nodata': None, 'width': 1000, 'height': 1000, 'count': 120, 'crs': CRS.from_epsg(4326), 'transform': Affine(1.0, 0.0, 0.0, 0.0, -1.0, 1000.0), 'blockxsize': 256, 'blockysize': 256, 'compress': 'deflate', 'interleave': 'band', 'tiled': True}
```

### res

The resolution of the dataset. The returned value is a tuple of floats.

```python
import mrio
mrio.read("example.tif").res
# >>> (1.0, 1.0)
```

### rpcs

Rational polynomial coefficients mapping between pixel and geodetic coordinates. The returned value is a dict-like object.
If the dataset does not have RPCs, the returned value is `None`.

```python
import mrio
mrio.read("example.tif").rpcs
# >>> None
```

### scales

The scales values for each band in the dataset. The returned value is a tuple of scales.

```python
import mrio
mrio.read("example.tif").scales
# >>> (1.0, 1.0, 1.0)
```

### subdatasets

The subdatasets of the dataset.

```python
import mrio
mrio.read("example.tif").subdatasets
# >>> []
```

### transform

The affine transformation matrix for the dataset. The returned value is an [Affine](https://rasterio.readthedocs.io/en/latest/api/rasterio.transform.html#rasterio.transform.Affine) object.

```python
import mrio
mrio.read("example.tif").transform
# >>> Affine(1.0, 0.0, 0.0, 0.0, -1.0, 1000.0)
```

### units

::: warning
The `units` in mrio is different from the `units` in rasterio.
:::

The units of the dataset. In mrio, we return just a string because in multi-dimensional COG files, the units are the same for all bands in the dataset. We keep the same name for consistency with the rasterio library.

```python
import mrio
mrio.read("example.tif").units
# >>> 'm'
```

### width

The width of the dataset in pixels. The returned value is an integer.

```python
import mrio
mrio.read("example.tif").width
# >>> 1000
```

## Extended attributes

## shape

The shape of the multi-dimensional COG file. The returned value is a tuple of integers.

```python
import mrio
mrio.read("example.tif").shape
# >>> (4, 10, 13, 1024, 1024)
```

## mode

The mode of the multi-dimensional COG file. Only two modes are supported: 'r' for read and 'w' for write. The 
returned value is a string.

```python
import mrio
mrio.read("example.tif").mode
# >>> 'r'
```

## attrs

Dictionary storing arbitrary metadata with this array.

```python
import mrio
mrio.read("example.tif").attrs
# >>> {'title': 'Sentinel-2 L2A', 'version': '1.0.0', 'date': '2022-01-01'}
```

## chunks

The chunk size of the multi-dimensional COG file.

```python
import mrio
mrio.read("example.tif").chunks
# >>> (1, 1, 1, 128, 128)
```

## coords

Dictionary of coordinate arrays. The keys are the names of the dimensions and the values are the coordinate arrays.

```python
import mrio
mrio.read("example.tif").coords
# >>> {'time': array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 'y': array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 'x': array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])}
```

## dtype

The data type of the multi-dimensional COG file. The returned value is a string.

```python
import mrio
mrio.read("example.tif").dtype
# >>> 'float32'
```

## ndim

The number of dimensions of the multi-dimensional COG file. The returned value is an integer.

```python
import mrio
mrio.read("example.tif").ndim
# >>> 5
```

## size

The size in bytes of the multi-dimensional COG file. The returned value is an integer.

```python
import mrio
mrio.read("example.tif").size
# >>> 4294967296
```

