export const hyperCubeTest = {
        qInfo: {
          qType: "visualization"
        },
        qHyperCubeDef: {
          qDimensions: [{
            qDef: {
              qFieldDefs: ["Product Group Desc"]
            },
            qNullSuppression: true
          }],
          qMeasures: [
            {
              qDef: {
                qDef: "Avg([Sales Amount])"
              }
            }
          ],
          qInitialDataFetch: [{
            qWidth: 2,
            qHeight: 1000
          }]
        }
      };
