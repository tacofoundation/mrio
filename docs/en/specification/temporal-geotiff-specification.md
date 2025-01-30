# The Temporal COG

## Overview

[Temporal mini cubes](https://www.cambridge.org/core/journals/environmental-data-science/article/earth-system-data-cubes-avenues-for-advancing-earth-system-research/C49F497A29699C7A1A6A2830755CAA6D) are becoming increasingly popular in the Earth Observation community. They are used to store time series of satellite images, facilitating the analysis of land cover changes, crop monitoring, and other applications. Current formats ([GeoZarr](https://github.com/zarr-developers/geozarr-spec/blob/main/geozarr-spec.md) and [HDF5](https://www.hdfgroup.org/solutions/hdf5/)) lack an explicit convention for defining the temporal and spatial dimensions of datacubes. The temporal COG (tCOG) specification refines the mCOG format by enforcing a more stringent convention for defining its dimensions.

<figure style="display: flex; flex-direction: column; align-items: center">
  <img src="../../public/content-gdal-ndim.svg" alt="Band GIF" style="width: 60%">
</figure>


## Format

This is the version `0.0.1` of the tCOG specification. The main difference between a mCOG and a tCOG is that the `md:pattern` is explicitly defined as `time band x y -> (band time) x y`. Additionally, certain attributes **MUST** be included in the `md:attributes` field of the **`MD_METADATA`** mCOG tag.

| Attribute | Type | Required | Details |
|---|---|---|---|
| md:time_start | Long | Yes | The nominal start time of acquisition. It **MUST** be expressed as a Unix timestamp in seconds. |
| md:id | String | Yes | A unique identifier for each time step. Therefore, it **MUST** have the same length as the `md:time_start` and the `time` dimension. |
| md:time_end | Long | No | The nominal end time of the acquisition or composite period. It **MUST** be expressed as a Unix timestamp in seconds. It **MUST** have the same length as the `md:time_start` and the `time` dimension. |

## Example

The following is an example of the `MD_METADATA` tag in a tGeoTIFF file:

```json
{
  "md:pattern": "time band y x -> (band time) y x",
  "md:coordinates": {
    "time": ["2021-01-01", "2021-01-02", "2021-01-03"],
    "band": ["B01", "B02", "B03"]
  },
  "md:dimensions": ["time", "band", "y", "x"],
  "md:attributes": {
    "title": "Temporal GeoTIFF Example",
    "description": "This is a toy example of a Temporal GeoTIFF file.",
    "md:id": [
        "S2A_MSIL2A_20210101T101021_N0214_R022_T33UYP_20210101T103000",
        "S2A_MSIL2A_20210102T101021_N0214_R022_T33UYP_20210102T103000",
        "S2A_MSIL2A_20210103T101021_N0214_R022_T33UYP_20210103T103000"
    ],
    "md:time_start": [
        1609481400,
        1609567800,
        1609654200
    ],
    "md:time_end": [
        1609567800,
        1609654200,
        1609740600
    ]
  },
    "md:coordinates_len": {
        "time": 3,
        "band": 3,
        "lat": 100,
        "lon": 100
    }
}
```
