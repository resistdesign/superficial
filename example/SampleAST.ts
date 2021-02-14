export default {
  type: 'Program',
  loc: {
    source: null,
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 80,
      column: 27,
    },
  },
  range: [0, 2375],
  body: [
    {
      type: 'ImportDeclaration',
      loc: {
        source: null,
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 54,
        },
      },
      range: [0, 54],
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          loc: {
            source: null,
            start: {
              line: 1,
              column: 7,
            },
            end: {
              line: 1,
              column: 12,
            },
          },
          range: [7, 12],
          local: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 1,
                column: 7,
              },
              end: {
                line: 1,
                column: 12,
              },
            },
            range: [7, 12],
            name: 'React',
            typeAnnotation: null,
            optional: false,
          },
        },
        {
          type: 'ImportSpecifier',
          loc: {
            source: null,
            start: {
              line: 1,
              column: 16,
            },
            end: {
              line: 1,
              column: 18,
            },
          },
          range: [16, 18],
          imported: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 1,
                column: 16,
              },
              end: {
                line: 1,
                column: 18,
              },
            },
            range: [16, 18],
            name: 'FC',
            typeAnnotation: null,
            optional: false,
          },
          local: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 1,
                column: 16,
              },
              end: {
                line: 1,
                column: 18,
              },
            },
            range: [16, 18],
            name: 'FC',
            typeAnnotation: null,
            optional: false,
          },
          importKind: null,
        },
        {
          type: 'ImportSpecifier',
          loc: {
            source: null,
            start: {
              line: 1,
              column: 20,
            },
            end: {
              line: 1,
              column: 29,
            },
          },
          range: [20, 29],
          imported: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 1,
                column: 20,
              },
              end: {
                line: 1,
                column: 29,
              },
            },
            range: [20, 29],
            name: 'ReactNode',
            typeAnnotation: null,
            optional: false,
          },
          local: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 1,
                column: 20,
              },
              end: {
                line: 1,
                column: 29,
              },
            },
            range: [20, 29],
            name: 'ReactNode',
            typeAnnotation: null,
            optional: false,
          },
          importKind: null,
        },
        {
          type: 'ImportSpecifier',
          loc: {
            source: null,
            start: {
              line: 1,
              column: 31,
            },
            end: {
              line: 1,
              column: 38,
            },
          },
          range: [31, 38],
          imported: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 1,
                column: 31,
              },
              end: {
                line: 1,
                column: 38,
              },
            },
            range: [31, 38],
            name: 'useMemo',
            typeAnnotation: null,
            optional: false,
          },
          local: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 1,
                column: 31,
              },
              end: {
                line: 1,
                column: 38,
              },
            },
            range: [31, 38],
            name: 'useMemo',
            typeAnnotation: null,
            optional: false,
          },
          importKind: null,
        },
      ],
      source: {
        type: 'Literal',
        loc: {
          source: null,
          start: {
            line: 1,
            column: 46,
          },
          end: {
            line: 1,
            column: 53,
          },
        },
        range: [46, 53],
        value: 'react',
        raw: "'react'",
      },
      importKind: 'value',
    },
    {
      type: 'TypeAlias',
      loc: {
        source: null,
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 3,
          column: 46,
        },
      },
      range: [56, 102],
      id: {
        type: 'Identifier',
        loc: {
          source: null,
          start: {
            line: 3,
            column: 5,
          },
          end: {
            line: 3,
            column: 17,
          },
        },
        range: [61, 73],
        name: 'StringObject',
        typeAnnotation: null,
        optional: false,
      },
      typeParameters: null,
      right: {
        type: 'ObjectTypeAnnotation',
        loc: {
          source: null,
          start: {
            line: 3,
            column: 20,
          },
          end: {
            line: 3,
            column: 45,
          },
        },
        range: [76, 101],
        inexact: false,
        exact: false,
        properties: [],
        indexers: [
          {
            type: 'ObjectTypeIndexer',
            loc: {
              source: null,
              start: {
                line: 3,
                column: 22,
              },
              end: {
                line: 3,
                column: 43,
              },
            },
            range: [78, 99],
            id: {
              type: 'Identifier',
              loc: {
                source: null,
                start: {
                  line: 3,
                  column: 23,
                },
                end: {
                  line: 3,
                  column: 26,
                },
              },
              range: [79, 82],
              name: 'key',
              typeAnnotation: null,
              optional: false,
            },
            key: {
              type: 'StringTypeAnnotation',
              loc: {
                source: null,
                start: {
                  line: 3,
                  column: 28,
                },
                end: {
                  line: 3,
                  column: 34,
                },
              },
              range: [84, 90],
            },
            value: {
              type: 'StringTypeAnnotation',
              loc: {
                source: null,
                start: {
                  line: 3,
                  column: 37,
                },
                end: {
                  line: 3,
                  column: 43,
                },
              },
              range: [93, 99],
            },
            static: false,
            variance: null,
          },
        ],
        callProperties: [],
        internalSlots: [],
      },
    },
    {
      type: 'VariableDeclaration',
      loc: {
        source: null,
        start: {
          line: 5,
          column: 0,
        },
        end: {
          line: 5,
          column: 45,
        },
      },
      range: [104, 149],
      declarations: [
        {
          type: 'VariableDeclarator',
          loc: {
            source: null,
            start: {
              line: 5,
              column: 6,
            },
            end: {
              line: 5,
              column: 44,
            },
          },
          range: [110, 148],
          id: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 5,
                column: 6,
              },
              end: {
                line: 5,
                column: 22,
              },
            },
            range: [110, 126],
            name: 'DATA_PROP_PREFIX',
            typeAnnotation: null,
            optional: false,
          },
          init: {
            type: 'Literal',
            loc: {
              source: null,
              start: {
                line: 5,
                column: 25,
              },
              end: {
                line: 5,
                column: 44,
              },
            },
            range: [129, 148],
            value: 'data-superficial-',
            raw: "'data-superficial-'",
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 16,
          column: 11,
        },
      },
      range: [151, 429],
      declaration: {
        type: 'VariableDeclaration',
        loc: {
          source: null,
          start: {
            line: 7,
            column: 7,
          },
          end: {
            line: 16,
            column: 11,
          },
        },
        range: [158, 429],
        declarations: [
          {
            type: 'VariableDeclarator',
            loc: {
              source: null,
              start: {
                line: 7,
                column: 13,
              },
              end: {
                line: 16,
                column: 10,
              },
            },
            range: [164, 428],
            id: {
              type: 'Identifier',
              loc: {
                source: null,
                start: {
                  line: 7,
                  column: 13,
                },
                end: {
                  line: 7,
                  column: 29,
                },
              },
              range: [164, 180],
              name: 'getPrefixedProps',
              typeAnnotation: null,
              optional: false,
            },
            init: {
              type: 'ArrowFunctionExpression',
              loc: {
                source: null,
                start: {
                  line: 7,
                  column: 32,
                },
                end: {
                  line: 16,
                  column: 10,
                },
              },
              range: [183, 428],
              id: null,
              params: [
                {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 7,
                      column: 33,
                    },
                    end: {
                      line: 7,
                      column: 60,
                    },
                  },
                  range: [184, 211],
                  name: 'data',
                  typeAnnotation: {
                    type: 'TypeAnnotation',
                    loc: {
                      source: null,
                      start: {
                        line: 7,
                        column: 37,
                      },
                      end: {
                        line: 7,
                        column: 60,
                      },
                    },
                    range: [188, 211],
                    typeAnnotation: {
                      type: 'UnionTypeAnnotation',
                      loc: {
                        source: null,
                        start: {
                          line: 7,
                          column: 39,
                        },
                        end: {
                          line: 7,
                          column: 60,
                        },
                      },
                      range: [190, 211],
                      types: [
                        {
                          type: 'GenericTypeAnnotation',
                          loc: {
                            source: null,
                            start: {
                              line: 7,
                              column: 39,
                            },
                            end: {
                              line: 7,
                              column: 51,
                            },
                          },
                          range: [190, 202],
                          id: {
                            type: 'Identifier',
                            loc: {
                              source: null,
                              start: {
                                line: 7,
                                column: 39,
                              },
                              end: {
                                line: 7,
                                column: 51,
                              },
                            },
                            range: [190, 202],
                            name: 'StringObject',
                            typeAnnotation: null,
                            optional: false,
                          },
                          typeParameters: null,
                        },
                        {
                          type: 'StringTypeAnnotation',
                          loc: {
                            source: null,
                            start: {
                              line: 7,
                              column: 54,
                            },
                            end: {
                              line: 7,
                              column: 60,
                            },
                          },
                          range: [205, 211],
                        },
                      ],
                    },
                  },
                  optional: false,
                },
              ],
              body: {
                type: 'ConditionalExpression',
                loc: {
                  source: null,
                  start: {
                    line: 8,
                    column: 2,
                  },
                  end: {
                    line: 16,
                    column: 10,
                  },
                },
                range: [241, 428],
                test: {
                  type: 'BinaryExpression',
                  loc: {
                    source: null,
                    start: {
                      line: 8,
                      column: 2,
                    },
                    end: {
                      line: 8,
                      column: 26,
                    },
                  },
                  range: [241, 265],
                  operator: '!==',
                  left: {
                    type: 'UnaryExpression',
                    loc: {
                      source: null,
                      start: {
                        line: 8,
                        column: 2,
                      },
                      end: {
                        line: 8,
                        column: 13,
                      },
                    },
                    range: [241, 252],
                    operator: 'typeof',
                    prefix: true,
                    argument: {
                      type: 'Identifier',
                      loc: {
                        source: null,
                        start: {
                          line: 8,
                          column: 9,
                        },
                        end: {
                          line: 8,
                          column: 13,
                        },
                      },
                      range: [248, 252],
                      name: 'data',
                      typeAnnotation: null,
                      optional: false,
                    },
                  },
                  right: {
                    type: 'Literal',
                    loc: {
                      source: null,
                      start: {
                        line: 8,
                        column: 18,
                      },
                      end: {
                        line: 8,
                        column: 26,
                      },
                    },
                    range: [257, 265],
                    value: 'string',
                    raw: "'string'",
                  },
                },
                consequent: {
                  type: 'CallExpression',
                  loc: {
                    source: null,
                    start: {
                      line: 9,
                      column: 6,
                    },
                    end: {
                      line: 15,
                      column: 7,
                    },
                  },
                  range: [272, 417],
                  callee: {
                    type: 'MemberExpression',
                    loc: {
                      source: null,
                      start: {
                        line: 9,
                        column: 6,
                      },
                      end: {
                        line: 9,
                        column: 30,
                      },
                    },
                    range: [272, 296],
                    object: {
                      type: 'CallExpression',
                      loc: {
                        source: null,
                        start: {
                          line: 9,
                          column: 6,
                        },
                        end: {
                          line: 9,
                          column: 23,
                        },
                      },
                      range: [272, 289],
                      callee: {
                        type: 'MemberExpression',
                        loc: {
                          source: null,
                          start: {
                            line: 9,
                            column: 6,
                          },
                          end: {
                            line: 9,
                            column: 17,
                          },
                        },
                        range: [272, 283],
                        object: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 9,
                              column: 6,
                            },
                            end: {
                              line: 9,
                              column: 12,
                            },
                          },
                          range: [272, 278],
                          name: 'Object',
                          typeAnnotation: null,
                          optional: false,
                        },
                        property: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 9,
                              column: 13,
                            },
                            end: {
                              line: 9,
                              column: 17,
                            },
                          },
                          range: [279, 283],
                          name: 'keys',
                          typeAnnotation: null,
                          optional: false,
                        },
                        computed: false,
                      },
                      typeArguments: null,
                      arguments: [
                        {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 9,
                              column: 18,
                            },
                            end: {
                              line: 9,
                              column: 22,
                            },
                          },
                          range: [284, 288],
                          name: 'data',
                          typeAnnotation: null,
                          optional: false,
                        },
                      ],
                    },
                    property: {
                      type: 'Identifier',
                      loc: {
                        source: null,
                        start: {
                          line: 9,
                          column: 24,
                        },
                        end: {
                          line: 9,
                          column: 30,
                        },
                      },
                      range: [290, 296],
                      name: 'reduce',
                      typeAnnotation: null,
                      optional: false,
                    },
                    computed: false,
                  },
                  typeArguments: null,
                  arguments: [
                    {
                      type: 'ArrowFunctionExpression',
                      loc: {
                        source: null,
                        start: {
                          line: 10,
                          column: 8,
                        },
                        end: {
                          line: 13,
                          column: 10,
                        },
                      },
                      range: [306, 397],
                      id: null,
                      params: [
                        {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 10,
                              column: 9,
                            },
                            end: {
                              line: 10,
                              column: 12,
                            },
                          },
                          range: [307, 310],
                          name: 'acc',
                          typeAnnotation: null,
                          optional: false,
                        },
                        {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 10,
                              column: 14,
                            },
                            end: {
                              line: 10,
                              column: 15,
                            },
                          },
                          range: [312, 313],
                          name: 'k',
                          typeAnnotation: null,
                          optional: false,
                        },
                      ],
                      body: {
                        type: 'ObjectExpression',
                        loc: {
                          source: null,
                          start: {
                            line: 10,
                            column: 21,
                          },
                          end: {
                            line: 13,
                            column: 9,
                          },
                        },
                        range: [319, 396],
                        properties: [
                          {
                            type: 'SpreadProperty',
                            loc: {
                              source: null,
                              start: {
                                line: 11,
                                column: 10,
                              },
                              end: {
                                line: 11,
                                column: 16,
                              },
                            },
                            range: [331, 337],
                            argument: {
                              type: 'Identifier',
                              loc: {
                                source: null,
                                start: {
                                  line: 11,
                                  column: 13,
                                },
                                end: {
                                  line: 11,
                                  column: 16,
                                },
                              },
                              range: [334, 337],
                              name: 'acc',
                              typeAnnotation: null,
                              optional: false,
                            },
                          },
                          {
                            type: 'Property',
                            loc: {
                              source: null,
                              start: {
                                line: 12,
                                column: 10,
                              },
                              end: {
                                line: 12,
                                column: 46,
                              },
                            },
                            range: [349, 385],
                            key: {
                              type: 'TemplateLiteral',
                              loc: {
                                source: null,
                                start: {
                                  line: 12,
                                  column: 11,
                                },
                                end: {
                                  line: 12,
                                  column: 36,
                                },
                              },
                              range: [350, 375],
                              quasis: [
                                {
                                  type: 'TemplateElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 12,
                                      column: 11,
                                    },
                                    end: {
                                      line: 12,
                                      column: 14,
                                    },
                                  },
                                  range: [350, 353],
                                  value: {
                                    raw: '',
                                    cooked: '',
                                  },
                                  tail: false,
                                },
                                {
                                  type: 'TemplateElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 12,
                                      column: 30,
                                    },
                                    end: {
                                      line: 12,
                                      column: 33,
                                    },
                                  },
                                  range: [369, 372],
                                  value: {
                                    raw: '',
                                    cooked: '',
                                  },
                                  tail: false,
                                },
                                {
                                  type: 'TemplateElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 12,
                                      column: 34,
                                    },
                                    end: {
                                      line: 12,
                                      column: 36,
                                    },
                                  },
                                  range: [373, 375],
                                  value: {
                                    raw: '',
                                    cooked: '',
                                  },
                                  tail: true,
                                },
                              ],
                              expressions: [
                                {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 12,
                                      column: 14,
                                    },
                                    end: {
                                      line: 12,
                                      column: 30,
                                    },
                                  },
                                  range: [353, 369],
                                  name: 'DATA_PROP_PREFIX',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                                {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 12,
                                      column: 33,
                                    },
                                    end: {
                                      line: 12,
                                      column: 34,
                                    },
                                  },
                                  range: [372, 373],
                                  name: 'k',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                              ],
                            },
                            value: {
                              type: 'MemberExpression',
                              loc: {
                                source: null,
                                start: {
                                  line: 12,
                                  column: 39,
                                },
                                end: {
                                  line: 12,
                                  column: 46,
                                },
                              },
                              range: [378, 385],
                              object: {
                                type: 'Identifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 12,
                                    column: 39,
                                  },
                                  end: {
                                    line: 12,
                                    column: 43,
                                  },
                                },
                                range: [378, 382],
                                name: 'data',
                                typeAnnotation: null,
                                optional: false,
                              },
                              property: {
                                type: 'Identifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 12,
                                    column: 44,
                                  },
                                  end: {
                                    line: 12,
                                    column: 45,
                                  },
                                },
                                range: [383, 384],
                                name: 'k',
                                typeAnnotation: null,
                                optional: false,
                              },
                              computed: true,
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            computed: true,
                          },
                        ],
                      },
                      async: false,
                      generator: false,
                      predicate: null,
                      expression: true,
                      returnType: null,
                      typeParameters: null,
                    },
                    {
                      type: 'ObjectExpression',
                      loc: {
                        source: null,
                        start: {
                          line: 14,
                          column: 8,
                        },
                        end: {
                          line: 14,
                          column: 10,
                        },
                      },
                      range: [407, 409],
                      properties: [],
                    },
                  ],
                },
                alternate: {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 16,
                      column: 6,
                    },
                    end: {
                      line: 16,
                      column: 10,
                    },
                  },
                  range: [424, 428],
                  name: 'data',
                  typeAnnotation: null,
                  optional: false,
                },
              },
              async: false,
              generator: false,
              predicate: null,
              expression: true,
              returnType: {
                type: 'TypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 7,
                    column: 61,
                  },
                  end: {
                    line: 7,
                    column: 84,
                  },
                },
                range: [212, 235],
                typeAnnotation: {
                  type: 'UnionTypeAnnotation',
                  loc: {
                    source: null,
                    start: {
                      line: 7,
                      column: 63,
                    },
                    end: {
                      line: 7,
                      column: 84,
                    },
                  },
                  range: [214, 235],
                  types: [
                    {
                      type: 'GenericTypeAnnotation',
                      loc: {
                        source: null,
                        start: {
                          line: 7,
                          column: 63,
                        },
                        end: {
                          line: 7,
                          column: 75,
                        },
                      },
                      range: [214, 226],
                      id: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 7,
                            column: 63,
                          },
                          end: {
                            line: 7,
                            column: 75,
                          },
                        },
                        range: [214, 226],
                        name: 'StringObject',
                        typeAnnotation: null,
                        optional: false,
                      },
                      typeParameters: null,
                    },
                    {
                      type: 'StringTypeAnnotation',
                      loc: {
                        source: null,
                        start: {
                          line: 7,
                          column: 78,
                        },
                        end: {
                          line: 7,
                          column: 84,
                        },
                      },
                      range: [229, 235],
                    },
                  ],
                },
              },
              typeParameters: null,
            },
          },
        ],
        kind: 'const',
      },
      specifiers: [],
      source: null,
      exportKind: 'value',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 18,
          column: 0,
        },
        end: {
          line: 42,
          column: 2,
        },
      },
      range: [431, 980],
      declaration: {
        type: 'VariableDeclaration',
        loc: {
          source: null,
          start: {
            line: 18,
            column: 7,
          },
          end: {
            line: 42,
            column: 2,
          },
        },
        range: [438, 980],
        declarations: [
          {
            type: 'VariableDeclarator',
            loc: {
              source: null,
              start: {
                line: 18,
                column: 13,
              },
              end: {
                line: 42,
                column: 1,
              },
            },
            range: [444, 979],
            id: {
              type: 'Identifier',
              loc: {
                source: null,
                start: {
                  line: 18,
                  column: 13,
                },
                end: {
                  line: 18,
                  column: 25,
                },
              },
              range: [444, 456],
              name: 'getDataProps',
              typeAnnotation: null,
              optional: false,
            },
            init: {
              type: 'ArrowFunctionExpression',
              loc: {
                source: null,
                start: {
                  line: 18,
                  column: 28,
                },
                end: {
                  line: 42,
                  column: 1,
                },
              },
              range: [459, 979],
              id: null,
              params: [
                {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 18,
                      column: 29,
                    },
                    end: {
                      line: 18,
                      column: 38,
                    },
                  },
                  range: [460, 469],
                  name: 'data',
                  typeAnnotation: {
                    type: 'TypeAnnotation',
                    loc: {
                      source: null,
                      start: {
                        line: 18,
                        column: 33,
                      },
                      end: {
                        line: 18,
                        column: 38,
                      },
                    },
                    range: [464, 469],
                    typeAnnotation: {
                      type: 'AnyTypeAnnotation',
                      loc: {
                        source: null,
                        start: {
                          line: 18,
                          column: 35,
                        },
                        end: {
                          line: 18,
                          column: 38,
                        },
                      },
                      range: [466, 469],
                    },
                  },
                  optional: false,
                },
                {
                  type: 'AssignmentPattern',
                  loc: {
                    source: null,
                    start: {
                      line: 18,
                      column: 40,
                    },
                    end: {
                      line: 18,
                      column: 57,
                    },
                  },
                  range: [471, 488],
                  left: {
                    type: 'Identifier',
                    loc: {
                      source: null,
                      start: {
                        line: 18,
                        column: 40,
                      },
                      end: {
                        line: 18,
                        column: 49,
                      },
                    },
                    range: [471, 480],
                    name: 'terminate',
                    typeAnnotation: null,
                    optional: false,
                  },
                  right: {
                    type: 'Literal',
                    loc: {
                      source: null,
                      start: {
                        line: 18,
                        column: 52,
                      },
                      end: {
                        line: 18,
                        column: 57,
                      },
                    },
                    range: [483, 488],
                    value: false,
                    raw: 'false',
                  },
                },
              ],
              body: {
                type: 'BlockStatement',
                loc: {
                  source: null,
                  start: {
                    line: 18,
                    column: 98,
                  },
                  end: {
                    line: 42,
                    column: 1,
                  },
                },
                range: [529, 979],
                body: [
                  {
                    type: 'IfStatement',
                    loc: {
                      source: null,
                      start: {
                        line: 19,
                        column: 2,
                      },
                      end: {
                        line: 41,
                        column: 3,
                      },
                    },
                    range: [533, 977],
                    test: {
                      type: 'BinaryExpression',
                      loc: {
                        source: null,
                        start: {
                          line: 19,
                          column: 6,
                        },
                        end: {
                          line: 19,
                          column: 27,
                        },
                      },
                      range: [537, 558],
                      operator: 'instanceof',
                      left: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 19,
                            column: 6,
                          },
                          end: {
                            line: 19,
                            column: 10,
                          },
                        },
                        range: [537, 541],
                        name: 'data',
                        typeAnnotation: null,
                        optional: false,
                      },
                      right: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 19,
                            column: 22,
                          },
                          end: {
                            line: 19,
                            column: 27,
                          },
                        },
                        range: [553, 558],
                        name: 'Array',
                        typeAnnotation: null,
                        optional: false,
                      },
                    },
                    consequent: {
                      type: 'BlockStatement',
                      loc: {
                        source: null,
                        start: {
                          line: 19,
                          column: 29,
                        },
                        end: {
                          line: 27,
                          column: 3,
                        },
                      },
                      range: [560, 686],
                      body: [
                        {
                          type: 'IfStatement',
                          loc: {
                            source: null,
                            start: {
                              line: 20,
                              column: 4,
                            },
                            end: {
                              line: 26,
                              column: 5,
                            },
                          },
                          range: [566, 682],
                          test: {
                            type: 'Identifier',
                            loc: {
                              source: null,
                              start: {
                                line: 20,
                                column: 8,
                              },
                              end: {
                                line: 20,
                                column: 17,
                              },
                            },
                            range: [570, 579],
                            name: 'terminate',
                            typeAnnotation: null,
                            optional: false,
                          },
                          consequent: {
                            type: 'BlockStatement',
                            loc: {
                              source: null,
                              start: {
                                line: 20,
                                column: 19,
                              },
                              end: {
                                line: 22,
                                column: 5,
                              },
                            },
                            range: [581, 611],
                            body: [
                              {
                                type: 'ReturnStatement',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 21,
                                    column: 6,
                                  },
                                  end: {
                                    line: 21,
                                    column: 22,
                                  },
                                },
                                range: [589, 605],
                                argument: {
                                  type: 'Literal',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 21,
                                      column: 13,
                                    },
                                    end: {
                                      line: 21,
                                      column: 21,
                                    },
                                  },
                                  range: [596, 604],
                                  value: 'Object',
                                  raw: "'Object'",
                                },
                              },
                            ],
                          },
                          alternate: {
                            type: 'BlockStatement',
                            loc: {
                              source: null,
                              start: {
                                line: 22,
                                column: 11,
                              },
                              end: {
                                line: 26,
                                column: 5,
                              },
                            },
                            range: [617, 682],
                            body: [
                              {
                                type: 'ReturnStatement',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 23,
                                    column: 6,
                                  },
                                  end: {
                                    line: 25,
                                    column: 8,
                                  },
                                },
                                range: [625, 676],
                                argument: {
                                  type: 'ObjectExpression',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 23,
                                      column: 13,
                                    },
                                    end: {
                                      line: 25,
                                      column: 7,
                                    },
                                  },
                                  range: [632, 675],
                                  properties: [
                                    {
                                      type: 'Property',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 24,
                                          column: 8,
                                        },
                                        end: {
                                          line: 24,
                                          column: 32,
                                        },
                                      },
                                      range: [642, 666],
                                      key: {
                                        type: 'Identifier',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 24,
                                            column: 8,
                                          },
                                          end: {
                                            line: 24,
                                            column: 14,
                                          },
                                        },
                                        range: [642, 648],
                                        name: 'length',
                                        typeAnnotation: null,
                                        optional: false,
                                      },
                                      value: {
                                        type: 'TemplateLiteral',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 24,
                                            column: 16,
                                          },
                                          end: {
                                            line: 24,
                                            column: 32,
                                          },
                                        },
                                        range: [650, 666],
                                        quasis: [
                                          {
                                            type: 'TemplateElement',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 24,
                                                column: 16,
                                              },
                                              end: {
                                                line: 24,
                                                column: 19,
                                              },
                                            },
                                            range: [650, 653],
                                            value: {
                                              raw: '',
                                              cooked: '',
                                            },
                                            tail: false,
                                          },
                                          {
                                            type: 'TemplateElement',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 24,
                                                column: 30,
                                              },
                                              end: {
                                                line: 24,
                                                column: 32,
                                              },
                                            },
                                            range: [664, 666],
                                            value: {
                                              raw: '',
                                              cooked: '',
                                            },
                                            tail: true,
                                          },
                                        ],
                                        expressions: [
                                          {
                                            type: 'MemberExpression',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 24,
                                                column: 19,
                                              },
                                              end: {
                                                line: 24,
                                                column: 30,
                                              },
                                            },
                                            range: [653, 664],
                                            object: {
                                              type: 'Identifier',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 24,
                                                  column: 19,
                                                },
                                                end: {
                                                  line: 24,
                                                  column: 23,
                                                },
                                              },
                                              range: [653, 657],
                                              name: 'data',
                                              typeAnnotation: null,
                                              optional: false,
                                            },
                                            property: {
                                              type: 'Identifier',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 24,
                                                  column: 24,
                                                },
                                                end: {
                                                  line: 24,
                                                  column: 30,
                                                },
                                              },
                                              range: [658, 664],
                                              name: 'length',
                                              typeAnnotation: null,
                                              optional: false,
                                            },
                                            computed: false,
                                          },
                                        ],
                                      },
                                      kind: 'init',
                                      method: false,
                                      shorthand: false,
                                      computed: false,
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    alternate: {
                      type: 'IfStatement',
                      loc: {
                        source: null,
                        start: {
                          line: 27,
                          column: 9,
                        },
                        end: {
                          line: 41,
                          column: 3,
                        },
                      },
                      range: [692, 977],
                      test: {
                        type: 'BinaryExpression',
                        loc: {
                          source: null,
                          start: {
                            line: 27,
                            column: 13,
                          },
                          end: {
                            line: 27,
                            column: 35,
                          },
                        },
                        range: [696, 718],
                        operator: 'instanceof',
                        left: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 27,
                              column: 13,
                            },
                            end: {
                              line: 27,
                              column: 17,
                            },
                          },
                          range: [696, 700],
                          name: 'data',
                          typeAnnotation: null,
                          optional: false,
                        },
                        right: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 27,
                              column: 29,
                            },
                            end: {
                              line: 27,
                              column: 35,
                            },
                          },
                          range: [712, 718],
                          name: 'Object',
                          typeAnnotation: null,
                          optional: false,
                        },
                      },
                      consequent: {
                        type: 'BlockStatement',
                        loc: {
                          source: null,
                          start: {
                            line: 27,
                            column: 37,
                          },
                          end: {
                            line: 39,
                            column: 3,
                          },
                        },
                        range: [720, 944],
                        body: [
                          {
                            type: 'IfStatement',
                            loc: {
                              source: null,
                              start: {
                                line: 28,
                                column: 4,
                              },
                              end: {
                                line: 38,
                                column: 5,
                              },
                            },
                            range: [726, 940],
                            test: {
                              type: 'Identifier',
                              loc: {
                                source: null,
                                start: {
                                  line: 28,
                                  column: 8,
                                },
                                end: {
                                  line: 28,
                                  column: 17,
                                },
                              },
                              range: [730, 739],
                              name: 'terminate',
                              typeAnnotation: null,
                              optional: false,
                            },
                            consequent: {
                              type: 'BlockStatement',
                              loc: {
                                source: null,
                                start: {
                                  line: 28,
                                  column: 19,
                                },
                                end: {
                                  line: 30,
                                  column: 5,
                                },
                              },
                              range: [741, 771],
                              body: [
                                {
                                  type: 'ReturnStatement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 29,
                                      column: 6,
                                    },
                                    end: {
                                      line: 29,
                                      column: 22,
                                    },
                                  },
                                  range: [749, 765],
                                  argument: {
                                    type: 'Literal',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 29,
                                        column: 13,
                                      },
                                      end: {
                                        line: 29,
                                        column: 21,
                                      },
                                    },
                                    range: [756, 764],
                                    value: 'Object',
                                    raw: "'Object'",
                                  },
                                },
                              ],
                            },
                            alternate: {
                              type: 'BlockStatement',
                              loc: {
                                source: null,
                                start: {
                                  line: 30,
                                  column: 11,
                                },
                                end: {
                                  line: 38,
                                  column: 5,
                                },
                              },
                              range: [777, 940],
                              body: [
                                {
                                  type: 'ReturnStatement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 31,
                                      column: 6,
                                    },
                                    end: {
                                      line: 37,
                                      column: 8,
                                    },
                                  },
                                  range: [785, 934],
                                  argument: {
                                    type: 'CallExpression',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 31,
                                        column: 13,
                                      },
                                      end: {
                                        line: 37,
                                        column: 7,
                                      },
                                    },
                                    range: [792, 933],
                                    callee: {
                                      type: 'MemberExpression',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 31,
                                          column: 13,
                                        },
                                        end: {
                                          line: 31,
                                          column: 37,
                                        },
                                      },
                                      range: [792, 816],
                                      object: {
                                        type: 'CallExpression',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 31,
                                            column: 13,
                                          },
                                          end: {
                                            line: 31,
                                            column: 30,
                                          },
                                        },
                                        range: [792, 809],
                                        callee: {
                                          type: 'MemberExpression',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 31,
                                              column: 13,
                                            },
                                            end: {
                                              line: 31,
                                              column: 24,
                                            },
                                          },
                                          range: [792, 803],
                                          object: {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 31,
                                                column: 13,
                                              },
                                              end: {
                                                line: 31,
                                                column: 19,
                                              },
                                            },
                                            range: [792, 798],
                                            name: 'Object',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                          property: {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 31,
                                                column: 20,
                                              },
                                              end: {
                                                line: 31,
                                                column: 24,
                                              },
                                            },
                                            range: [799, 803],
                                            name: 'keys',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                          computed: false,
                                        },
                                        typeArguments: null,
                                        arguments: [
                                          {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 31,
                                                column: 25,
                                              },
                                              end: {
                                                line: 31,
                                                column: 29,
                                              },
                                            },
                                            range: [804, 808],
                                            name: 'data',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                        ],
                                      },
                                      property: {
                                        type: 'Identifier',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 31,
                                            column: 31,
                                          },
                                          end: {
                                            line: 31,
                                            column: 37,
                                          },
                                        },
                                        range: [810, 816],
                                        name: 'reduce',
                                        typeAnnotation: null,
                                        optional: false,
                                      },
                                      computed: false,
                                    },
                                    typeArguments: null,
                                    arguments: [
                                      {
                                        type: 'ArrowFunctionExpression',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 32,
                                            column: 8,
                                          },
                                          end: {
                                            line: 35,
                                            column: 10,
                                          },
                                        },
                                        range: [826, 913],
                                        id: null,
                                        params: [
                                          {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 32,
                                                column: 9,
                                              },
                                              end: {
                                                line: 32,
                                                column: 12,
                                              },
                                            },
                                            range: [827, 830],
                                            name: 'acc',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                          {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 32,
                                                column: 14,
                                              },
                                              end: {
                                                line: 32,
                                                column: 15,
                                              },
                                            },
                                            range: [832, 833],
                                            name: 'k',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                        ],
                                        body: {
                                          type: 'ObjectExpression',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 32,
                                              column: 21,
                                            },
                                            end: {
                                              line: 35,
                                              column: 9,
                                            },
                                          },
                                          range: [839, 912],
                                          properties: [
                                            {
                                              type: 'SpreadProperty',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 33,
                                                  column: 10,
                                                },
                                                end: {
                                                  line: 33,
                                                  column: 16,
                                                },
                                              },
                                              range: [851, 857],
                                              argument: {
                                                type: 'Identifier',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 33,
                                                    column: 13,
                                                  },
                                                  end: {
                                                    line: 33,
                                                    column: 16,
                                                  },
                                                },
                                                range: [854, 857],
                                                name: 'acc',
                                                typeAnnotation: null,
                                                optional: false,
                                              },
                                            },
                                            {
                                              type: 'Property',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 34,
                                                  column: 10,
                                                },
                                                end: {
                                                  line: 34,
                                                  column: 42,
                                                },
                                              },
                                              range: [869, 901],
                                              key: {
                                                type: 'Identifier',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 34,
                                                    column: 11,
                                                  },
                                                  end: {
                                                    line: 34,
                                                    column: 12,
                                                  },
                                                },
                                                range: [870, 871],
                                                name: 'k',
                                                typeAnnotation: null,
                                                optional: false,
                                              },
                                              value: {
                                                type: 'CallExpression',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 34,
                                                    column: 15,
                                                  },
                                                  end: {
                                                    line: 34,
                                                    column: 42,
                                                  },
                                                },
                                                range: [874, 901],
                                                callee: {
                                                  type: 'Identifier',
                                                  loc: {
                                                    source: null,
                                                    start: {
                                                      line: 34,
                                                      column: 15,
                                                    },
                                                    end: {
                                                      line: 34,
                                                      column: 27,
                                                    },
                                                  },
                                                  range: [874, 886],
                                                  name: 'getDataProps',
                                                  typeAnnotation: null,
                                                  optional: false,
                                                },
                                                typeArguments: null,
                                                arguments: [
                                                  {
                                                    type: 'MemberExpression',
                                                    loc: {
                                                      source: null,
                                                      start: {
                                                        line: 34,
                                                        column: 28,
                                                      },
                                                      end: {
                                                        line: 34,
                                                        column: 35,
                                                      },
                                                    },
                                                    range: [887, 894],
                                                    object: {
                                                      type: 'Identifier',
                                                      loc: {
                                                        source: null,
                                                        start: {
                                                          line: 34,
                                                          column: 28,
                                                        },
                                                        end: {
                                                          line: 34,
                                                          column: 32,
                                                        },
                                                      },
                                                      range: [887, 891],
                                                      name: 'data',
                                                      typeAnnotation: null,
                                                      optional: false,
                                                    },
                                                    property: {
                                                      type: 'Identifier',
                                                      loc: {
                                                        source: null,
                                                        start: {
                                                          line: 34,
                                                          column: 33,
                                                        },
                                                        end: {
                                                          line: 34,
                                                          column: 34,
                                                        },
                                                      },
                                                      range: [892, 893],
                                                      name: 'k',
                                                      typeAnnotation: null,
                                                      optional: false,
                                                    },
                                                    computed: true,
                                                  },
                                                  {
                                                    type: 'Literal',
                                                    loc: {
                                                      source: null,
                                                      start: {
                                                        line: 34,
                                                        column: 37,
                                                      },
                                                      end: {
                                                        line: 34,
                                                        column: 41,
                                                      },
                                                    },
                                                    range: [896, 900],
                                                    value: true,
                                                    raw: 'true',
                                                  },
                                                ],
                                              },
                                              kind: 'init',
                                              method: false,
                                              shorthand: false,
                                              computed: true,
                                            },
                                          ],
                                        },
                                        async: false,
                                        generator: false,
                                        predicate: null,
                                        expression: true,
                                        returnType: null,
                                        typeParameters: null,
                                      },
                                      {
                                        type: 'ObjectExpression',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 36,
                                            column: 8,
                                          },
                                          end: {
                                            line: 36,
                                            column: 10,
                                          },
                                        },
                                        range: [923, 925],
                                        properties: [],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                      alternate: {
                        type: 'BlockStatement',
                        loc: {
                          source: null,
                          start: {
                            line: 39,
                            column: 9,
                          },
                          end: {
                            line: 41,
                            column: 3,
                          },
                        },
                        range: [950, 977],
                        body: [
                          {
                            type: 'ReturnStatement',
                            loc: {
                              source: null,
                              start: {
                                line: 40,
                                column: 4,
                              },
                              end: {
                                line: 40,
                                column: 21,
                              },
                            },
                            range: [956, 973],
                            argument: {
                              type: 'TemplateLiteral',
                              loc: {
                                source: null,
                                start: {
                                  line: 40,
                                  column: 11,
                                },
                                end: {
                                  line: 40,
                                  column: 20,
                                },
                              },
                              range: [963, 972],
                              quasis: [
                                {
                                  type: 'TemplateElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 40,
                                      column: 11,
                                    },
                                    end: {
                                      line: 40,
                                      column: 14,
                                    },
                                  },
                                  range: [963, 966],
                                  value: {
                                    raw: '',
                                    cooked: '',
                                  },
                                  tail: false,
                                },
                                {
                                  type: 'TemplateElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 40,
                                      column: 18,
                                    },
                                    end: {
                                      line: 40,
                                      column: 20,
                                    },
                                  },
                                  range: [970, 972],
                                  value: {
                                    raw: '',
                                    cooked: '',
                                  },
                                  tail: true,
                                },
                              ],
                              expressions: [
                                {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 40,
                                      column: 14,
                                    },
                                    end: {
                                      line: 40,
                                      column: 18,
                                    },
                                  },
                                  range: [966, 970],
                                  name: 'data',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
              async: false,
              generator: false,
              predicate: null,
              expression: false,
              returnType: {
                type: 'TypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 18,
                    column: 58,
                  },
                  end: {
                    line: 18,
                    column: 94,
                  },
                },
                range: [489, 525],
                typeAnnotation: {
                  type: 'UnionTypeAnnotation',
                  loc: {
                    source: null,
                    start: {
                      line: 18,
                      column: 60,
                    },
                    end: {
                      line: 18,
                      column: 94,
                    },
                  },
                  range: [491, 525],
                  types: [
                    {
                      type: 'ObjectTypeAnnotation',
                      loc: {
                        source: null,
                        start: {
                          line: 18,
                          column: 60,
                        },
                        end: {
                          line: 18,
                          column: 85,
                        },
                      },
                      range: [491, 516],
                      inexact: false,
                      exact: false,
                      properties: [],
                      indexers: [
                        {
                          type: 'ObjectTypeIndexer',
                          loc: {
                            source: null,
                            start: {
                              line: 18,
                              column: 62,
                            },
                            end: {
                              line: 18,
                              column: 83,
                            },
                          },
                          range: [493, 514],
                          id: {
                            type: 'Identifier',
                            loc: {
                              source: null,
                              start: {
                                line: 18,
                                column: 63,
                              },
                              end: {
                                line: 18,
                                column: 66,
                              },
                            },
                            range: [494, 497],
                            name: 'key',
                            typeAnnotation: null,
                            optional: false,
                          },
                          key: {
                            type: 'StringTypeAnnotation',
                            loc: {
                              source: null,
                              start: {
                                line: 18,
                                column: 68,
                              },
                              end: {
                                line: 18,
                                column: 74,
                              },
                            },
                            range: [499, 505],
                          },
                          value: {
                            type: 'StringTypeAnnotation',
                            loc: {
                              source: null,
                              start: {
                                line: 18,
                                column: 77,
                              },
                              end: {
                                line: 18,
                                column: 83,
                              },
                            },
                            range: [508, 514],
                          },
                          static: false,
                          variance: null,
                        },
                      ],
                      callProperties: [],
                      internalSlots: [],
                    },
                    {
                      type: 'StringTypeAnnotation',
                      loc: {
                        source: null,
                        start: {
                          line: 18,
                          column: 88,
                        },
                        end: {
                          line: 18,
                          column: 94,
                        },
                      },
                      range: [519, 525],
                    },
                  ],
                },
              },
              typeParameters: null,
            },
          },
        ],
        kind: 'const',
      },
      specifiers: [],
      source: null,
      exportKind: 'value',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 44,
          column: 0,
        },
        end: {
          line: 44,
          column: 76,
        },
      },
      range: [982, 1058],
      declaration: {
        type: 'TypeAlias',
        loc: {
          source: null,
          start: {
            line: 44,
            column: 7,
          },
          end: {
            line: 44,
            column: 76,
          },
        },
        range: [989, 1058],
        id: {
          type: 'Identifier',
          loc: {
            source: null,
            start: {
              line: 44,
              column: 12,
            },
            end: {
              line: 44,
              column: 45,
            },
          },
          range: [994, 1027],
          name: 'SuperficialComponentFactoryConfig',
          typeAnnotation: null,
          optional: false,
        },
        typeParameters: null,
        right: {
          type: 'ObjectTypeAnnotation',
          loc: {
            source: null,
            start: {
              line: 44,
              column: 48,
            },
            end: {
              line: 44,
              column: 75,
            },
          },
          range: [1030, 1057],
          inexact: false,
          exact: false,
          properties: [
            {
              type: 'ObjectTypeProperty',
              loc: {
                source: null,
                start: {
                  line: 44,
                  column: 50,
                },
                end: {
                  line: 44,
                  column: 62,
                },
              },
              range: [1032, 1044],
              key: {
                type: 'Identifier',
                loc: {
                  source: null,
                  start: {
                    line: 44,
                    column: 50,
                  },
                  end: {
                    line: 44,
                    column: 54,
                  },
                },
                range: [1032, 1036],
                name: 'name',
                typeAnnotation: null,
                optional: false,
              },
              value: {
                type: 'StringTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 44,
                    column: 56,
                  },
                  end: {
                    line: 44,
                    column: 62,
                  },
                },
                range: [1038, 1044],
              },
              method: false,
              optional: false,
              static: false,
              proto: false,
              variance: null,
              kind: 'init',
            },
            {
              type: 'ObjectTypeProperty',
              loc: {
                source: null,
                start: {
                  line: 44,
                  column: 64,
                },
                end: {
                  line: 44,
                  column: 73,
                },
              },
              range: [1046, 1055],
              key: {
                type: 'Identifier',
                loc: {
                  source: null,
                  start: {
                    line: 44,
                    column: 64,
                  },
                  end: {
                    line: 44,
                    column: 68,
                  },
                },
                range: [1046, 1050],
                name: 'data',
                typeAnnotation: null,
                optional: false,
              },
              value: {
                type: 'AnyTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 44,
                    column: 70,
                  },
                  end: {
                    line: 44,
                    column: 73,
                  },
                },
                range: [1052, 1055],
              },
              method: false,
              optional: false,
              static: false,
              proto: false,
              variance: null,
              kind: 'init',
            },
          ],
          indexers: [],
          callProperties: [],
          internalSlots: [],
        },
      },
      specifiers: [],
      source: null,
      exportKind: 'type',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 45,
          column: 0,
        },
        end: {
          line: 45,
          column: 107,
        },
      },
      range: [1059, 1166],
      declaration: {
        type: 'TypeAlias',
        loc: {
          source: null,
          start: {
            line: 45,
            column: 7,
          },
          end: {
            line: 45,
            column: 107,
          },
        },
        range: [1066, 1166],
        id: {
          type: 'Identifier',
          loc: {
            source: null,
            start: {
              line: 45,
              column: 12,
            },
            end: {
              line: 45,
              column: 44,
            },
          },
          range: [1071, 1103],
          name: 'SuperficialFactoryComponentProps',
          typeAnnotation: null,
          optional: false,
        },
        typeParameters: null,
        right: {
          type: 'IntersectionTypeAnnotation',
          loc: {
            source: null,
            start: {
              line: 45,
              column: 47,
            },
            end: {
              line: 45,
              column: 106,
            },
          },
          range: [1106, 1165],
          types: [
            {
              type: 'GenericTypeAnnotation',
              loc: {
                source: null,
                start: {
                  line: 45,
                  column: 47,
                },
                end: {
                  line: 45,
                  column: 80,
                },
              },
              range: [1106, 1139],
              id: {
                type: 'Identifier',
                loc: {
                  source: null,
                  start: {
                    line: 45,
                    column: 47,
                  },
                  end: {
                    line: 45,
                    column: 80,
                  },
                },
                range: [1106, 1139],
                name: 'SuperficialComponentFactoryConfig',
                typeAnnotation: null,
                optional: false,
              },
              typeParameters: null,
            },
            {
              type: 'ObjectTypeAnnotation',
              loc: {
                source: null,
                start: {
                  line: 45,
                  column: 83,
                },
                end: {
                  line: 45,
                  column: 106,
                },
              },
              range: [1142, 1165],
              inexact: false,
              exact: false,
              properties: [
                {
                  type: 'ObjectTypeProperty',
                  loc: {
                    source: null,
                    start: {
                      line: 45,
                      column: 85,
                    },
                    end: {
                      line: 45,
                      column: 104,
                    },
                  },
                  range: [1144, 1163],
                  key: {
                    type: 'Identifier',
                    loc: {
                      source: null,
                      start: {
                        line: 45,
                        column: 85,
                      },
                      end: {
                        line: 45,
                        column: 93,
                      },
                    },
                    range: [1144, 1152],
                    name: 'children',
                    typeAnnotation: null,
                    optional: false,
                  },
                  value: {
                    type: 'GenericTypeAnnotation',
                    loc: {
                      source: null,
                      start: {
                        line: 45,
                        column: 95,
                      },
                      end: {
                        line: 45,
                        column: 104,
                      },
                    },
                    range: [1154, 1163],
                    id: {
                      type: 'Identifier',
                      loc: {
                        source: null,
                        start: {
                          line: 45,
                          column: 95,
                        },
                        end: {
                          line: 45,
                          column: 104,
                        },
                      },
                      range: [1154, 1163],
                      name: 'ReactNode',
                      typeAnnotation: null,
                      optional: false,
                    },
                    typeParameters: null,
                  },
                  method: false,
                  optional: false,
                  static: false,
                  proto: false,
                  variance: null,
                  kind: 'init',
                },
              ],
              indexers: [],
              callProperties: [],
              internalSlots: [],
            },
          ],
        },
      },
      specifiers: [],
      source: null,
      exportKind: 'type',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 46,
          column: 0,
        },
        end: {
          line: 46,
          column: 79,
        },
      },
      range: [1167, 1246],
      declaration: {
        type: 'TypeAlias',
        loc: {
          source: null,
          start: {
            line: 46,
            column: 7,
          },
          end: {
            line: 46,
            column: 79,
          },
        },
        range: [1174, 1246],
        id: {
          type: 'Identifier',
          loc: {
            source: null,
            start: {
              line: 46,
              column: 12,
            },
            end: {
              line: 46,
              column: 39,
            },
          },
          range: [1179, 1206],
          name: 'SuperficialFactoryComponent',
          typeAnnotation: null,
          optional: false,
        },
        typeParameters: null,
        right: {
          type: 'GenericTypeAnnotation',
          loc: {
            source: null,
            start: {
              line: 46,
              column: 42,
            },
            end: {
              line: 46,
              column: 78,
            },
          },
          range: [1209, 1245],
          id: {
            type: 'Identifier',
            loc: {
              source: null,
              start: {
                line: 46,
                column: 42,
              },
              end: {
                line: 46,
                column: 44,
              },
            },
            range: [1209, 1211],
            name: 'FC',
            typeAnnotation: null,
            optional: false,
          },
          typeParameters: {
            type: 'TypeParameterInstantiation',
            loc: {
              source: null,
              start: {
                line: 46,
                column: 44,
              },
              end: {
                line: 46,
                column: 78,
              },
            },
            range: [1211, 1245],
            params: [
              {
                type: 'GenericTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 46,
                    column: 45,
                  },
                  end: {
                    line: 46,
                    column: 77,
                  },
                },
                range: [1212, 1244],
                id: {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 46,
                      column: 45,
                    },
                    end: {
                      line: 46,
                      column: 77,
                    },
                  },
                  range: [1212, 1244],
                  name: 'SuperficialFactoryComponentProps',
                  typeAnnotation: null,
                  optional: false,
                },
                typeParameters: null,
              },
            ],
          },
        },
      },
      specifiers: [],
      source: null,
      exportKind: 'type',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 47,
          column: 0,
        },
        end: {
          line: 47,
          column: 129,
        },
      },
      range: [1247, 1376],
      declaration: {
        type: 'TypeAlias',
        loc: {
          source: null,
          start: {
            line: 47,
            column: 7,
          },
          end: {
            line: 47,
            column: 129,
          },
        },
        range: [1254, 1376],
        id: {
          type: 'Identifier',
          loc: {
            source: null,
            start: {
              line: 47,
              column: 12,
            },
            end: {
              line: 47,
              column: 39,
            },
          },
          range: [1259, 1286],
          name: 'SuperficialComponentFactory',
          typeAnnotation: null,
          optional: false,
        },
        typeParameters: null,
        right: {
          type: 'FunctionTypeAnnotation',
          loc: {
            source: null,
            start: {
              line: 47,
              column: 42,
            },
            end: {
              line: 47,
              column: 128,
            },
          },
          range: [1289, 1375],
          params: [
            {
              type: 'FunctionTypeParam',
              loc: {
                source: null,
                start: {
                  line: 47,
                  column: 43,
                },
                end: {
                  line: 47,
                  column: 84,
                },
              },
              range: [1290, 1331],
              name: {
                type: 'Identifier',
                loc: {
                  source: null,
                  start: {
                    line: 47,
                    column: 43,
                  },
                  end: {
                    line: 47,
                    column: 49,
                  },
                },
                range: [1290, 1296],
                name: 'config',
                typeAnnotation: null,
                optional: false,
              },
              typeAnnotation: {
                type: 'GenericTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 47,
                    column: 51,
                  },
                  end: {
                    line: 47,
                    column: 84,
                  },
                },
                range: [1298, 1331],
                id: {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 47,
                      column: 51,
                    },
                    end: {
                      line: 47,
                      column: 84,
                    },
                  },
                  range: [1298, 1331],
                  name: 'SuperficialComponentFactoryConfig',
                  typeAnnotation: null,
                  optional: false,
                },
                typeParameters: null,
              },
              optional: false,
            },
          ],
          this: null,
          returnType: {
            type: 'UnionTypeAnnotation',
            loc: {
              source: null,
              start: {
                line: 47,
                column: 89,
              },
              end: {
                line: 47,
                column: 128,
              },
            },
            range: [1336, 1375],
            types: [
              {
                type: 'GenericTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 47,
                    column: 89,
                  },
                  end: {
                    line: 47,
                    column: 116,
                  },
                },
                range: [1336, 1363],
                id: {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 47,
                      column: 89,
                    },
                    end: {
                      line: 47,
                      column: 116,
                    },
                  },
                  range: [1336, 1363],
                  name: 'SuperficialFactoryComponent',
                  typeAnnotation: null,
                  optional: false,
                },
                typeParameters: null,
              },
              {
                type: 'GenericTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 47,
                    column: 119,
                  },
                  end: {
                    line: 47,
                    column: 128,
                  },
                },
                range: [1366, 1375],
                id: {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 47,
                      column: 119,
                    },
                    end: {
                      line: 47,
                      column: 128,
                    },
                  },
                  range: [1366, 1375],
                  name: 'undefined',
                  typeAnnotation: null,
                  optional: false,
                },
                typeParameters: null,
              },
            ],
          },
          rest: null,
          typeParameters: null,
        },
      },
      specifiers: [],
      source: null,
      exportKind: 'type',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 49,
          column: 0,
        },
        end: {
          line: 53,
          column: 2,
        },
      },
      range: [1378, 1492],
      declaration: {
        type: 'TypeAlias',
        loc: {
          source: null,
          start: {
            line: 49,
            column: 7,
          },
          end: {
            line: 53,
            column: 2,
          },
        },
        range: [1385, 1492],
        id: {
          type: 'Identifier',
          loc: {
            source: null,
            start: {
              line: 49,
              column: 12,
            },
            end: {
              line: 49,
              column: 28,
            },
          },
          range: [1390, 1406],
          name: 'SuperficialProps',
          typeAnnotation: null,
          optional: false,
        },
        typeParameters: null,
        right: {
          type: 'ObjectTypeAnnotation',
          loc: {
            source: null,
            start: {
              line: 49,
              column: 31,
            },
            end: {
              line: 53,
              column: 1,
            },
          },
          range: [1409, 1491],
          inexact: false,
          exact: false,
          properties: [
            {
              type: 'ObjectTypeProperty',
              loc: {
                source: null,
                start: {
                  line: 50,
                  column: 2,
                },
                end: {
                  line: 50,
                  column: 14,
                },
              },
              range: [1413, 1425],
              key: {
                type: 'Identifier',
                loc: {
                  source: null,
                  start: {
                    line: 50,
                    column: 2,
                  },
                  end: {
                    line: 50,
                    column: 6,
                  },
                },
                range: [1413, 1417],
                name: 'name',
                typeAnnotation: null,
                optional: false,
              },
              value: {
                type: 'StringTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 50,
                    column: 8,
                  },
                  end: {
                    line: 50,
                    column: 14,
                  },
                },
                range: [1419, 1425],
              },
              method: false,
              optional: false,
              static: false,
              proto: false,
              variance: null,
              kind: 'init',
            },
            {
              type: 'ObjectTypeProperty',
              loc: {
                source: null,
                start: {
                  line: 51,
                  column: 2,
                },
                end: {
                  line: 51,
                  column: 11,
                },
              },
              range: [1429, 1438],
              key: {
                type: 'Identifier',
                loc: {
                  source: null,
                  start: {
                    line: 51,
                    column: 2,
                  },
                  end: {
                    line: 51,
                    column: 6,
                  },
                },
                range: [1429, 1433],
                name: 'data',
                typeAnnotation: null,
                optional: false,
              },
              value: {
                type: 'AnyTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 51,
                    column: 8,
                  },
                  end: {
                    line: 51,
                    column: 11,
                  },
                },
                range: [1435, 1438],
              },
              method: false,
              optional: false,
              static: false,
              proto: false,
              variance: null,
              kind: 'init',
            },
            {
              type: 'ObjectTypeProperty',
              loc: {
                source: null,
                start: {
                  line: 52,
                  column: 2,
                },
                end: {
                  line: 52,
                  column: 48,
                },
              },
              range: [1442, 1488],
              key: {
                type: 'Identifier',
                loc: {
                  source: null,
                  start: {
                    line: 52,
                    column: 2,
                  },
                  end: {
                    line: 52,
                    column: 18,
                  },
                },
                range: [1442, 1458],
                name: 'componentFactory',
                typeAnnotation: null,
                optional: false,
              },
              value: {
                type: 'GenericTypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 52,
                    column: 21,
                  },
                  end: {
                    line: 52,
                    column: 48,
                  },
                },
                range: [1461, 1488],
                id: {
                  type: 'Identifier',
                  loc: {
                    source: null,
                    start: {
                      line: 52,
                      column: 21,
                    },
                    end: {
                      line: 52,
                      column: 48,
                    },
                  },
                  range: [1461, 1488],
                  name: 'SuperficialComponentFactory',
                  typeAnnotation: null,
                  optional: false,
                },
                typeParameters: null,
              },
              method: false,
              optional: true,
              static: false,
              proto: false,
              variance: null,
              kind: 'init',
            },
          ],
          indexers: [],
          callProperties: [],
          internalSlots: [],
        },
      },
      specifiers: [],
      source: null,
      exportKind: 'type',
    },
    {
      type: 'ExportNamedDeclaration',
      loc: {
        source: null,
        start: {
          line: 55,
          column: 0,
        },
        end: {
          line: 78,
          column: 2,
        },
      },
      range: [1494, 2346],
      declaration: {
        type: 'VariableDeclaration',
        loc: {
          source: null,
          start: {
            line: 55,
            column: 7,
          },
          end: {
            line: 78,
            column: 2,
          },
        },
        range: [1501, 2346],
        declarations: [
          {
            type: 'VariableDeclarator',
            loc: {
              source: null,
              start: {
                line: 55,
                column: 13,
              },
              end: {
                line: 78,
                column: 1,
              },
            },
            range: [1507, 2345],
            id: {
              type: 'Identifier',
              loc: {
                source: null,
                start: {
                  line: 55,
                  column: 13,
                },
                end: {
                  line: 55,
                  column: 46,
                },
              },
              range: [1507, 1540],
              name: 'Superficial',
              typeAnnotation: {
                type: 'TypeAnnotation',
                loc: {
                  source: null,
                  start: {
                    line: 55,
                    column: 24,
                  },
                  end: {
                    line: 55,
                    column: 46,
                  },
                },
                range: [1518, 1540],
                typeAnnotation: {
                  type: 'GenericTypeAnnotation',
                  loc: {
                    source: null,
                    start: {
                      line: 55,
                      column: 26,
                    },
                    end: {
                      line: 55,
                      column: 46,
                    },
                  },
                  range: [1520, 1540],
                  id: {
                    type: 'Identifier',
                    loc: {
                      source: null,
                      start: {
                        line: 55,
                        column: 26,
                      },
                      end: {
                        line: 55,
                        column: 28,
                      },
                    },
                    range: [1520, 1522],
                    name: 'FC',
                    typeAnnotation: null,
                    optional: false,
                  },
                  typeParameters: {
                    type: 'TypeParameterInstantiation',
                    loc: {
                      source: null,
                      start: {
                        line: 55,
                        column: 28,
                      },
                      end: {
                        line: 55,
                        column: 46,
                      },
                    },
                    range: [1522, 1540],
                    params: [
                      {
                        type: 'GenericTypeAnnotation',
                        loc: {
                          source: null,
                          start: {
                            line: 55,
                            column: 29,
                          },
                          end: {
                            line: 55,
                            column: 45,
                          },
                        },
                        range: [1523, 1539],
                        id: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 55,
                              column: 29,
                            },
                            end: {
                              line: 55,
                              column: 45,
                            },
                          },
                          range: [1523, 1539],
                          name: 'SuperficialProps',
                          typeAnnotation: null,
                          optional: false,
                        },
                        typeParameters: null,
                      },
                    ],
                  },
                },
              },
              optional: false,
            },
            init: {
              type: 'ArrowFunctionExpression',
              loc: {
                source: null,
                start: {
                  line: 55,
                  column: 49,
                },
                end: {
                  line: 78,
                  column: 1,
                },
              },
              range: [1543, 2345],
              id: null,
              params: [
                {
                  type: 'ObjectPattern',
                  loc: {
                    source: null,
                    start: {
                      line: 55,
                      column: 50,
                    },
                    end: {
                      line: 55,
                      column: 82,
                    },
                  },
                  range: [1544, 1576],
                  properties: [
                    {
                      type: 'Property',
                      loc: {
                        source: null,
                        start: {
                          line: 55,
                          column: 52,
                        },
                        end: {
                          line: 55,
                          column: 56,
                        },
                      },
                      range: [1546, 1550],
                      key: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 55,
                            column: 52,
                          },
                          end: {
                            line: 55,
                            column: 56,
                          },
                        },
                        range: [1546, 1550],
                        name: 'name',
                        typeAnnotation: null,
                        optional: false,
                      },
                      value: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 55,
                            column: 52,
                          },
                          end: {
                            line: 55,
                            column: 56,
                          },
                        },
                        range: [1546, 1550],
                        name: 'name',
                        typeAnnotation: null,
                        optional: false,
                      },
                      kind: 'init',
                      method: false,
                      shorthand: true,
                      computed: false,
                    },
                    {
                      type: 'Property',
                      loc: {
                        source: null,
                        start: {
                          line: 55,
                          column: 58,
                        },
                        end: {
                          line: 55,
                          column: 62,
                        },
                      },
                      range: [1552, 1556],
                      key: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 55,
                            column: 58,
                          },
                          end: {
                            line: 55,
                            column: 62,
                          },
                        },
                        range: [1552, 1556],
                        name: 'data',
                        typeAnnotation: null,
                        optional: false,
                      },
                      value: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 55,
                            column: 58,
                          },
                          end: {
                            line: 55,
                            column: 62,
                          },
                        },
                        range: [1552, 1556],
                        name: 'data',
                        typeAnnotation: null,
                        optional: false,
                      },
                      kind: 'init',
                      method: false,
                      shorthand: true,
                      computed: false,
                    },
                    {
                      type: 'Property',
                      loc: {
                        source: null,
                        start: {
                          line: 55,
                          column: 64,
                        },
                        end: {
                          line: 55,
                          column: 80,
                        },
                      },
                      range: [1558, 1574],
                      key: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 55,
                            column: 64,
                          },
                          end: {
                            line: 55,
                            column: 80,
                          },
                        },
                        range: [1558, 1574],
                        name: 'componentFactory',
                        typeAnnotation: null,
                        optional: false,
                      },
                      value: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 55,
                            column: 64,
                          },
                          end: {
                            line: 55,
                            column: 80,
                          },
                        },
                        range: [1558, 1574],
                        name: 'componentFactory',
                        typeAnnotation: null,
                        optional: false,
                      },
                      kind: 'init',
                      method: false,
                      shorthand: true,
                      computed: false,
                    },
                  ],
                  typeAnnotation: null,
                },
              ],
              body: {
                type: 'BlockStatement',
                loc: {
                  source: null,
                  start: {
                    line: 55,
                    column: 87,
                  },
                  end: {
                    line: 78,
                    column: 1,
                  },
                },
                range: [1581, 2345],
                body: [
                  {
                    type: 'VariableDeclaration',
                    loc: {
                      source: null,
                      start: {
                        line: 56,
                        column: 2,
                      },
                      end: {
                        line: 60,
                        column: 13,
                      },
                    },
                    range: [1585, 1731],
                    declarations: [
                      {
                        type: 'VariableDeclarator',
                        loc: {
                          source: null,
                          start: {
                            line: 56,
                            column: 8,
                          },
                          end: {
                            line: 60,
                            column: 12,
                          },
                        },
                        range: [1591, 1730],
                        id: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 56,
                              column: 8,
                            },
                            end: {
                              line: 56,
                              column: 17,
                            },
                          },
                          range: [1591, 1600],
                          name: 'dataProps',
                          typeAnnotation: null,
                          optional: false,
                        },
                        init: {
                          type: 'CallExpression',
                          loc: {
                            source: null,
                            start: {
                              line: 56,
                              column: 20,
                            },
                            end: {
                              line: 60,
                              column: 12,
                            },
                          },
                          range: [1603, 1730],
                          callee: {
                            type: 'Identifier',
                            loc: {
                              source: null,
                              start: {
                                line: 56,
                                column: 20,
                              },
                              end: {
                                line: 56,
                                column: 27,
                              },
                            },
                            range: [1603, 1610],
                            name: 'useMemo',
                            typeAnnotation: null,
                            optional: false,
                          },
                          typeArguments: null,
                          arguments: [
                            {
                              type: 'ArrowFunctionExpression',
                              loc: {
                                source: null,
                                start: {
                                  line: 56,
                                  column: 28,
                                },
                                end: {
                                  line: 60,
                                  column: 3,
                                },
                              },
                              range: [1611, 1721],
                              id: null,
                              params: [],
                              body: {
                                type: 'BlockStatement',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 56,
                                    column: 34,
                                  },
                                  end: {
                                    line: 60,
                                    column: 3,
                                  },
                                },
                                range: [1617, 1721],
                                body: [
                                  {
                                    type: 'VariableDeclaration',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 57,
                                        column: 4,
                                      },
                                      end: {
                                        line: 57,
                                        column: 52,
                                      },
                                    },
                                    range: [1623, 1671],
                                    declarations: [
                                      {
                                        type: 'VariableDeclarator',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 57,
                                            column: 10,
                                          },
                                          end: {
                                            line: 57,
                                            column: 51,
                                          },
                                        },
                                        range: [1629, 1670],
                                        id: {
                                          type: 'Identifier',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 57,
                                              column: 10,
                                            },
                                            end: {
                                              line: 57,
                                              column: 12,
                                            },
                                          },
                                          range: [1629, 1631],
                                          name: 'dP',
                                          typeAnnotation: null,
                                          optional: false,
                                        },
                                        init: {
                                          type: 'CallExpression',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 57,
                                              column: 15,
                                            },
                                            end: {
                                              line: 57,
                                              column: 51,
                                            },
                                          },
                                          range: [1634, 1670],
                                          callee: {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 57,
                                                column: 15,
                                              },
                                              end: {
                                                line: 57,
                                                column: 31,
                                              },
                                            },
                                            range: [1634, 1650],
                                            name: 'getPrefixedProps',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                          typeArguments: null,
                                          arguments: [
                                            {
                                              type: 'CallExpression',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 57,
                                                  column: 32,
                                                },
                                                end: {
                                                  line: 57,
                                                  column: 50,
                                                },
                                              },
                                              range: [1651, 1669],
                                              callee: {
                                                type: 'Identifier',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 57,
                                                    column: 32,
                                                  },
                                                  end: {
                                                    line: 57,
                                                    column: 44,
                                                  },
                                                },
                                                range: [1651, 1663],
                                                name: 'getDataProps',
                                                typeAnnotation: null,
                                                optional: false,
                                              },
                                              typeArguments: null,
                                              arguments: [
                                                {
                                                  type: 'Identifier',
                                                  loc: {
                                                    source: null,
                                                    start: {
                                                      line: 57,
                                                      column: 45,
                                                    },
                                                    end: {
                                                      line: 57,
                                                      column: 49,
                                                    },
                                                  },
                                                  range: [1664, 1668],
                                                  name: 'data',
                                                  typeAnnotation: null,
                                                  optional: false,
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    kind: 'const',
                                  },
                                  {
                                    type: 'ReturnStatement',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 59,
                                        column: 4,
                                      },
                                      end: {
                                        line: 59,
                                        column: 44,
                                      },
                                    },
                                    range: [1677, 1717],
                                    argument: {
                                      type: 'ConditionalExpression',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 59,
                                          column: 11,
                                        },
                                        end: {
                                          line: 59,
                                          column: 43,
                                        },
                                      },
                                      range: [1684, 1716],
                                      test: {
                                        type: 'BinaryExpression',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 59,
                                            column: 11,
                                          },
                                          end: {
                                            line: 59,
                                            column: 33,
                                          },
                                        },
                                        range: [1684, 1706],
                                        operator: '===',
                                        left: {
                                          type: 'UnaryExpression',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 59,
                                              column: 11,
                                            },
                                            end: {
                                              line: 59,
                                              column: 20,
                                            },
                                          },
                                          range: [1684, 1693],
                                          operator: 'typeof',
                                          prefix: true,
                                          argument: {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 59,
                                                column: 18,
                                              },
                                              end: {
                                                line: 59,
                                                column: 20,
                                              },
                                            },
                                            range: [1691, 1693],
                                            name: 'dP',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                        },
                                        right: {
                                          type: 'Literal',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 59,
                                              column: 25,
                                            },
                                            end: {
                                              line: 59,
                                              column: 33,
                                            },
                                          },
                                          range: [1698, 1706],
                                          value: 'string',
                                          raw: "'string'",
                                        },
                                      },
                                      consequent: {
                                        type: 'ObjectExpression',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 59,
                                            column: 36,
                                          },
                                          end: {
                                            line: 59,
                                            column: 38,
                                          },
                                        },
                                        range: [1709, 1711],
                                        properties: [],
                                      },
                                      alternate: {
                                        type: 'Identifier',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 59,
                                            column: 41,
                                          },
                                          end: {
                                            line: 59,
                                            column: 43,
                                          },
                                        },
                                        range: [1714, 1716],
                                        name: 'dP',
                                        typeAnnotation: null,
                                        optional: false,
                                      },
                                    },
                                  },
                                ],
                              },
                              async: false,
                              generator: false,
                              predicate: null,
                              expression: false,
                              returnType: null,
                              typeParameters: null,
                            },
                            {
                              type: 'ArrayExpression',
                              loc: {
                                source: null,
                                start: {
                                  line: 60,
                                  column: 5,
                                },
                                end: {
                                  line: 60,
                                  column: 11,
                                },
                              },
                              range: [1723, 1729],
                              elements: [
                                {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 60,
                                      column: 6,
                                    },
                                    end: {
                                      line: 60,
                                      column: 10,
                                    },
                                  },
                                  range: [1724, 1728],
                                  name: 'data',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                    kind: 'const',
                  },
                  {
                    type: 'VariableDeclaration',
                    loc: {
                      source: null,
                      start: {
                        line: 61,
                        column: 2,
                      },
                      end: {
                        line: 66,
                        column: 18,
                      },
                    },
                    range: [1734, 2091],
                    declarations: [
                      {
                        type: 'VariableDeclarator',
                        loc: {
                          source: null,
                          start: {
                            line: 61,
                            column: 8,
                          },
                          end: {
                            line: 66,
                            column: 17,
                          },
                        },
                        range: [1740, 2090],
                        id: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 61,
                              column: 8,
                            },
                            end: {
                              line: 61,
                              column: 16,
                            },
                          },
                          range: [1740, 1748],
                          name: 'elements',
                          typeAnnotation: null,
                          optional: false,
                        },
                        init: {
                          type: 'ConditionalExpression',
                          loc: {
                            source: null,
                            start: {
                              line: 62,
                              column: 4,
                            },
                            end: {
                              line: 66,
                              column: 17,
                            },
                          },
                          range: [1755, 2090],
                          test: {
                            type: 'BinaryExpression',
                            loc: {
                              source: null,
                              start: {
                                line: 62,
                                column: 4,
                              },
                              end: {
                                line: 62,
                                column: 25,
                              },
                            },
                            range: [1755, 1776],
                            operator: 'instanceof',
                            left: {
                              type: 'Identifier',
                              loc: {
                                source: null,
                                start: {
                                  line: 62,
                                  column: 4,
                                },
                                end: {
                                  line: 62,
                                  column: 8,
                                },
                              },
                              range: [1755, 1759],
                              name: 'data',
                              typeAnnotation: null,
                              optional: false,
                            },
                            right: {
                              type: 'Identifier',
                              loc: {
                                source: null,
                                start: {
                                  line: 62,
                                  column: 20,
                                },
                                end: {
                                  line: 62,
                                  column: 25,
                                },
                              },
                              range: [1771, 1776],
                              name: 'Array',
                              typeAnnotation: null,
                              optional: false,
                            },
                          },
                          consequent: {
                            type: 'CallExpression',
                            loc: {
                              source: null,
                              start: {
                                line: 63,
                                column: 8,
                              },
                              end: {
                                line: 63,
                                column: 129,
                              },
                            },
                            range: [1785, 1906],
                            callee: {
                              type: 'MemberExpression',
                              loc: {
                                source: null,
                                start: {
                                  line: 63,
                                  column: 8,
                                },
                                end: {
                                  line: 63,
                                  column: 16,
                                },
                              },
                              range: [1785, 1793],
                              object: {
                                type: 'Identifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 63,
                                    column: 8,
                                  },
                                  end: {
                                    line: 63,
                                    column: 12,
                                  },
                                },
                                range: [1785, 1789],
                                name: 'data',
                                typeAnnotation: null,
                                optional: false,
                              },
                              property: {
                                type: 'Identifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 63,
                                    column: 13,
                                  },
                                  end: {
                                    line: 63,
                                    column: 16,
                                  },
                                },
                                range: [1790, 1793],
                                name: 'map',
                                typeAnnotation: null,
                                optional: false,
                              },
                              computed: false,
                            },
                            typeArguments: null,
                            arguments: [
                              {
                                type: 'ArrowFunctionExpression',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 63,
                                    column: 17,
                                  },
                                  end: {
                                    line: 63,
                                    column: 128,
                                  },
                                },
                                range: [1794, 1905],
                                id: null,
                                params: [
                                  {
                                    type: 'Identifier',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 63,
                                        column: 18,
                                      },
                                      end: {
                                        line: 63,
                                        column: 22,
                                      },
                                    },
                                    range: [1795, 1799],
                                    name: 'item',
                                    typeAnnotation: null,
                                    optional: false,
                                  },
                                  {
                                    type: 'Identifier',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 63,
                                        column: 24,
                                      },
                                      end: {
                                        line: 63,
                                        column: 25,
                                      },
                                    },
                                    range: [1801, 1802],
                                    name: 'i',
                                    typeAnnotation: null,
                                    optional: false,
                                  },
                                ],
                                body: {
                                  type: 'JSXElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 63,
                                      column: 30,
                                    },
                                    end: {
                                      line: 63,
                                      column: 128,
                                    },
                                  },
                                  range: [1807, 1905],
                                  openingElement: {
                                    type: 'JSXOpeningElement',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 63,
                                        column: 30,
                                      },
                                      end: {
                                        line: 63,
                                        column: 128,
                                      },
                                    },
                                    range: [1807, 1905],
                                    name: {
                                      type: 'JSXIdentifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 63,
                                          column: 31,
                                        },
                                        end: {
                                          line: 63,
                                          column: 42,
                                        },
                                      },
                                      range: [1808, 1819],
                                      name: 'Superficial',
                                    },
                                    attributes: [
                                      {
                                        type: 'JSXAttribute',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 63,
                                            column: 43,
                                          },
                                          end: {
                                            line: 63,
                                            column: 63,
                                          },
                                        },
                                        range: [1820, 1840],
                                        name: {
                                          type: 'JSXIdentifier',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 43,
                                            },
                                            end: {
                                              line: 63,
                                              column: 46,
                                            },
                                          },
                                          range: [1820, 1823],
                                          name: 'key',
                                        },
                                        value: {
                                          type: 'JSXExpressionContainer',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 47,
                                            },
                                            end: {
                                              line: 63,
                                              column: 63,
                                            },
                                          },
                                          range: [1824, 1840],
                                          expression: {
                                            type: 'TemplateLiteral',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 63,
                                                column: 48,
                                              },
                                              end: {
                                                line: 63,
                                                column: 62,
                                              },
                                            },
                                            range: [1825, 1839],
                                            quasis: [
                                              {
                                                type: 'TemplateElement',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 63,
                                                    column: 48,
                                                  },
                                                  end: {
                                                    line: 63,
                                                    column: 59,
                                                  },
                                                },
                                                range: [1825, 1836],
                                                value: {
                                                  raw: 'Element:',
                                                  cooked: 'Element:',
                                                },
                                                tail: false,
                                              },
                                              {
                                                type: 'TemplateElement',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 63,
                                                    column: 60,
                                                  },
                                                  end: {
                                                    line: 63,
                                                    column: 62,
                                                  },
                                                },
                                                range: [1837, 1839],
                                                value: {
                                                  raw: '',
                                                  cooked: '',
                                                },
                                                tail: true,
                                              },
                                            ],
                                            expressions: [
                                              {
                                                type: 'Identifier',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 63,
                                                    column: 59,
                                                  },
                                                  end: {
                                                    line: 63,
                                                    column: 60,
                                                  },
                                                },
                                                range: [1836, 1837],
                                                name: 'i',
                                                typeAnnotation: null,
                                                optional: false,
                                              },
                                            ],
                                          },
                                        },
                                      },
                                      {
                                        type: 'JSXAttribute',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 63,
                                            column: 64,
                                          },
                                          end: {
                                            line: 63,
                                            column: 77,
                                          },
                                        },
                                        range: [1841, 1854],
                                        name: {
                                          type: 'JSXIdentifier',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 64,
                                            },
                                            end: {
                                              line: 63,
                                              column: 68,
                                            },
                                          },
                                          range: [1841, 1845],
                                          name: 'name',
                                        },
                                        value: {
                                          type: 'JSXExpressionContainer',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 69,
                                            },
                                            end: {
                                              line: 63,
                                              column: 77,
                                            },
                                          },
                                          range: [1846, 1854],
                                          expression: {
                                            type: 'TemplateLiteral',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 63,
                                                column: 70,
                                              },
                                              end: {
                                                line: 63,
                                                column: 76,
                                              },
                                            },
                                            range: [1847, 1853],
                                            quasis: [
                                              {
                                                type: 'TemplateElement',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 63,
                                                    column: 70,
                                                  },
                                                  end: {
                                                    line: 63,
                                                    column: 73,
                                                  },
                                                },
                                                range: [1847, 1850],
                                                value: {
                                                  raw: '',
                                                  cooked: '',
                                                },
                                                tail: false,
                                              },
                                              {
                                                type: 'TemplateElement',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 63,
                                                    column: 74,
                                                  },
                                                  end: {
                                                    line: 63,
                                                    column: 76,
                                                  },
                                                },
                                                range: [1851, 1853],
                                                value: {
                                                  raw: '',
                                                  cooked: '',
                                                },
                                                tail: true,
                                              },
                                            ],
                                            expressions: [
                                              {
                                                type: 'Identifier',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 63,
                                                    column: 73,
                                                  },
                                                  end: {
                                                    line: 63,
                                                    column: 74,
                                                  },
                                                },
                                                range: [1850, 1851],
                                                name: 'i',
                                                typeAnnotation: null,
                                                optional: false,
                                              },
                                            ],
                                          },
                                        },
                                      },
                                      {
                                        type: 'JSXAttribute',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 63,
                                            column: 78,
                                          },
                                          end: {
                                            line: 63,
                                            column: 89,
                                          },
                                        },
                                        range: [1855, 1866],
                                        name: {
                                          type: 'JSXIdentifier',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 78,
                                            },
                                            end: {
                                              line: 63,
                                              column: 82,
                                            },
                                          },
                                          range: [1855, 1859],
                                          name: 'data',
                                        },
                                        value: {
                                          type: 'JSXExpressionContainer',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 83,
                                            },
                                            end: {
                                              line: 63,
                                              column: 89,
                                            },
                                          },
                                          range: [1860, 1866],
                                          expression: {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 63,
                                                column: 84,
                                              },
                                              end: {
                                                line: 63,
                                                column: 88,
                                              },
                                            },
                                            range: [1861, 1865],
                                            name: 'item',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                        },
                                      },
                                      {
                                        type: 'JSXAttribute',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 63,
                                            column: 90,
                                          },
                                          end: {
                                            line: 63,
                                            column: 125,
                                          },
                                        },
                                        range: [1867, 1902],
                                        name: {
                                          type: 'JSXIdentifier',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 90,
                                            },
                                            end: {
                                              line: 63,
                                              column: 106,
                                            },
                                          },
                                          range: [1867, 1883],
                                          name: 'componentFactory',
                                        },
                                        value: {
                                          type: 'JSXExpressionContainer',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 63,
                                              column: 107,
                                            },
                                            end: {
                                              line: 63,
                                              column: 125,
                                            },
                                          },
                                          range: [1884, 1902],
                                          expression: {
                                            type: 'Identifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 63,
                                                column: 108,
                                              },
                                              end: {
                                                line: 63,
                                                column: 124,
                                              },
                                            },
                                            range: [1885, 1901],
                                            name: 'componentFactory',
                                            typeAnnotation: null,
                                            optional: false,
                                          },
                                        },
                                      },
                                    ],
                                    selfClosing: true,
                                  },
                                  closingElement: null,
                                  children: [],
                                },
                                async: false,
                                generator: false,
                                predicate: null,
                                expression: true,
                                returnType: null,
                                typeParameters: null,
                              },
                            ],
                          },
                          alternate: {
                            type: 'ConditionalExpression',
                            loc: {
                              source: null,
                              start: {
                                line: 64,
                                column: 8,
                              },
                              end: {
                                line: 66,
                                column: 17,
                              },
                            },
                            range: [1915, 2090],
                            test: {
                              type: 'BinaryExpression',
                              loc: {
                                source: null,
                                start: {
                                  line: 64,
                                  column: 8,
                                },
                                end: {
                                  line: 64,
                                  column: 30,
                                },
                              },
                              range: [1915, 1937],
                              operator: 'instanceof',
                              left: {
                                type: 'Identifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 64,
                                    column: 8,
                                  },
                                  end: {
                                    line: 64,
                                    column: 12,
                                  },
                                },
                                range: [1915, 1919],
                                name: 'data',
                                typeAnnotation: null,
                                optional: false,
                              },
                              right: {
                                type: 'Identifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 64,
                                    column: 24,
                                  },
                                  end: {
                                    line: 64,
                                    column: 30,
                                  },
                                },
                                range: [1931, 1937],
                                name: 'Object',
                                typeAnnotation: null,
                                optional: false,
                              },
                            },
                            consequent: {
                              type: 'CallExpression',
                              loc: {
                                source: null,
                                start: {
                                  line: 65,
                                  column: 8,
                                },
                                end: {
                                  line: 65,
                                  column: 134,
                                },
                              },
                              range: [1946, 2072],
                              callee: {
                                type: 'MemberExpression',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 65,
                                    column: 8,
                                  },
                                  end: {
                                    line: 65,
                                    column: 29,
                                  },
                                },
                                range: [1946, 1967],
                                object: {
                                  type: 'CallExpression',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 65,
                                      column: 8,
                                    },
                                    end: {
                                      line: 65,
                                      column: 25,
                                    },
                                  },
                                  range: [1946, 1963],
                                  callee: {
                                    type: 'MemberExpression',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 65,
                                        column: 8,
                                      },
                                      end: {
                                        line: 65,
                                        column: 19,
                                      },
                                    },
                                    range: [1946, 1957],
                                    object: {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 65,
                                          column: 8,
                                        },
                                        end: {
                                          line: 65,
                                          column: 14,
                                        },
                                      },
                                      range: [1946, 1952],
                                      name: 'Object',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                    property: {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 65,
                                          column: 15,
                                        },
                                        end: {
                                          line: 65,
                                          column: 19,
                                        },
                                      },
                                      range: [1953, 1957],
                                      name: 'keys',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                    computed: false,
                                  },
                                  typeArguments: null,
                                  arguments: [
                                    {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 65,
                                          column: 20,
                                        },
                                        end: {
                                          line: 65,
                                          column: 24,
                                        },
                                      },
                                      range: [1958, 1962],
                                      name: 'data',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                  ],
                                },
                                property: {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 65,
                                      column: 26,
                                    },
                                    end: {
                                      line: 65,
                                      column: 29,
                                    },
                                  },
                                  range: [1964, 1967],
                                  name: 'map',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                                computed: false,
                              },
                              typeArguments: null,
                              arguments: [
                                {
                                  type: 'ArrowFunctionExpression',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 65,
                                      column: 30,
                                    },
                                    end: {
                                      line: 65,
                                      column: 133,
                                    },
                                  },
                                  range: [1968, 2071],
                                  id: null,
                                  params: [
                                    {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 65,
                                          column: 31,
                                        },
                                        end: {
                                          line: 65,
                                          column: 32,
                                        },
                                      },
                                      range: [1969, 1970],
                                      name: 'k',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                  ],
                                  body: {
                                    type: 'JSXElement',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 65,
                                        column: 37,
                                      },
                                      end: {
                                        line: 65,
                                        column: 133,
                                      },
                                    },
                                    range: [1975, 2071],
                                    openingElement: {
                                      type: 'JSXOpeningElement',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 65,
                                          column: 37,
                                        },
                                        end: {
                                          line: 65,
                                          column: 133,
                                        },
                                      },
                                      range: [1975, 2071],
                                      name: {
                                        type: 'JSXIdentifier',
                                        loc: {
                                          source: null,
                                          start: {
                                            line: 65,
                                            column: 38,
                                          },
                                          end: {
                                            line: 65,
                                            column: 49,
                                          },
                                        },
                                        range: [1976, 1987],
                                        name: 'Superficial',
                                      },
                                      attributes: [
                                        {
                                          type: 'JSXAttribute',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 65,
                                              column: 50,
                                            },
                                            end: {
                                              line: 65,
                                              column: 70,
                                            },
                                          },
                                          range: [1988, 2008],
                                          name: {
                                            type: 'JSXIdentifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 50,
                                              },
                                              end: {
                                                line: 65,
                                                column: 53,
                                              },
                                            },
                                            range: [1988, 1991],
                                            name: 'key',
                                          },
                                          value: {
                                            type: 'JSXExpressionContainer',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 54,
                                              },
                                              end: {
                                                line: 65,
                                                column: 70,
                                              },
                                            },
                                            range: [1992, 2008],
                                            expression: {
                                              type: 'TemplateLiteral',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 65,
                                                  column: 55,
                                                },
                                                end: {
                                                  line: 65,
                                                  column: 69,
                                                },
                                              },
                                              range: [1993, 2007],
                                              quasis: [
                                                {
                                                  type: 'TemplateElement',
                                                  loc: {
                                                    source: null,
                                                    start: {
                                                      line: 65,
                                                      column: 55,
                                                    },
                                                    end: {
                                                      line: 65,
                                                      column: 66,
                                                    },
                                                  },
                                                  range: [1993, 2004],
                                                  value: {
                                                    raw: 'Element:',
                                                    cooked: 'Element:',
                                                  },
                                                  tail: false,
                                                },
                                                {
                                                  type: 'TemplateElement',
                                                  loc: {
                                                    source: null,
                                                    start: {
                                                      line: 65,
                                                      column: 67,
                                                    },
                                                    end: {
                                                      line: 65,
                                                      column: 69,
                                                    },
                                                  },
                                                  range: [2005, 2007],
                                                  value: {
                                                    raw: '',
                                                    cooked: '',
                                                  },
                                                  tail: true,
                                                },
                                              ],
                                              expressions: [
                                                {
                                                  type: 'Identifier',
                                                  loc: {
                                                    source: null,
                                                    start: {
                                                      line: 65,
                                                      column: 66,
                                                    },
                                                    end: {
                                                      line: 65,
                                                      column: 67,
                                                    },
                                                  },
                                                  range: [2004, 2005],
                                                  name: 'k',
                                                  typeAnnotation: null,
                                                  optional: false,
                                                },
                                              ],
                                            },
                                          },
                                        },
                                        {
                                          type: 'JSXAttribute',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 65,
                                              column: 71,
                                            },
                                            end: {
                                              line: 65,
                                              column: 79,
                                            },
                                          },
                                          range: [2009, 2017],
                                          name: {
                                            type: 'JSXIdentifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 71,
                                              },
                                              end: {
                                                line: 65,
                                                column: 75,
                                              },
                                            },
                                            range: [2009, 2013],
                                            name: 'name',
                                          },
                                          value: {
                                            type: 'JSXExpressionContainer',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 76,
                                              },
                                              end: {
                                                line: 65,
                                                column: 79,
                                              },
                                            },
                                            range: [2014, 2017],
                                            expression: {
                                              type: 'Identifier',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 65,
                                                  column: 77,
                                                },
                                                end: {
                                                  line: 65,
                                                  column: 78,
                                                },
                                              },
                                              range: [2015, 2016],
                                              name: 'k',
                                              typeAnnotation: null,
                                              optional: false,
                                            },
                                          },
                                        },
                                        {
                                          type: 'JSXAttribute',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 65,
                                              column: 80,
                                            },
                                            end: {
                                              line: 65,
                                              column: 94,
                                            },
                                          },
                                          range: [2018, 2032],
                                          name: {
                                            type: 'JSXIdentifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 80,
                                              },
                                              end: {
                                                line: 65,
                                                column: 84,
                                              },
                                            },
                                            range: [2018, 2022],
                                            name: 'data',
                                          },
                                          value: {
                                            type: 'JSXExpressionContainer',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 85,
                                              },
                                              end: {
                                                line: 65,
                                                column: 94,
                                              },
                                            },
                                            range: [2023, 2032],
                                            expression: {
                                              type: 'MemberExpression',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 65,
                                                  column: 86,
                                                },
                                                end: {
                                                  line: 65,
                                                  column: 93,
                                                },
                                              },
                                              range: [2024, 2031],
                                              object: {
                                                type: 'Identifier',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 65,
                                                    column: 86,
                                                  },
                                                  end: {
                                                    line: 65,
                                                    column: 90,
                                                  },
                                                },
                                                range: [2024, 2028],
                                                name: 'data',
                                                typeAnnotation: null,
                                                optional: false,
                                              },
                                              property: {
                                                type: 'Identifier',
                                                loc: {
                                                  source: null,
                                                  start: {
                                                    line: 65,
                                                    column: 91,
                                                  },
                                                  end: {
                                                    line: 65,
                                                    column: 92,
                                                  },
                                                },
                                                range: [2029, 2030],
                                                name: 'k',
                                                typeAnnotation: null,
                                                optional: false,
                                              },
                                              computed: true,
                                            },
                                          },
                                        },
                                        {
                                          type: 'JSXAttribute',
                                          loc: {
                                            source: null,
                                            start: {
                                              line: 65,
                                              column: 95,
                                            },
                                            end: {
                                              line: 65,
                                              column: 130,
                                            },
                                          },
                                          range: [2033, 2068],
                                          name: {
                                            type: 'JSXIdentifier',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 95,
                                              },
                                              end: {
                                                line: 65,
                                                column: 111,
                                              },
                                            },
                                            range: [2033, 2049],
                                            name: 'componentFactory',
                                          },
                                          value: {
                                            type: 'JSXExpressionContainer',
                                            loc: {
                                              source: null,
                                              start: {
                                                line: 65,
                                                column: 112,
                                              },
                                              end: {
                                                line: 65,
                                                column: 130,
                                              },
                                            },
                                            range: [2050, 2068],
                                            expression: {
                                              type: 'Identifier',
                                              loc: {
                                                source: null,
                                                start: {
                                                  line: 65,
                                                  column: 113,
                                                },
                                                end: {
                                                  line: 65,
                                                  column: 129,
                                                },
                                              },
                                              range: [2051, 2067],
                                              name: 'componentFactory',
                                              typeAnnotation: null,
                                              optional: false,
                                            },
                                          },
                                        },
                                      ],
                                      selfClosing: true,
                                    },
                                    closingElement: null,
                                    children: [],
                                  },
                                  async: false,
                                  generator: false,
                                  predicate: null,
                                  expression: true,
                                  returnType: null,
                                  typeParameters: null,
                                },
                              ],
                            },
                            alternate: {
                              type: 'TemplateLiteral',
                              loc: {
                                source: null,
                                start: {
                                  line: 66,
                                  column: 8,
                                },
                                end: {
                                  line: 66,
                                  column: 17,
                                },
                              },
                              range: [2081, 2090],
                              quasis: [
                                {
                                  type: 'TemplateElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 66,
                                      column: 8,
                                    },
                                    end: {
                                      line: 66,
                                      column: 11,
                                    },
                                  },
                                  range: [2081, 2084],
                                  value: {
                                    raw: '',
                                    cooked: '',
                                  },
                                  tail: false,
                                },
                                {
                                  type: 'TemplateElement',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 66,
                                      column: 15,
                                    },
                                    end: {
                                      line: 66,
                                      column: 17,
                                    },
                                  },
                                  range: [2088, 2090],
                                  value: {
                                    raw: '',
                                    cooked: '',
                                  },
                                  tail: true,
                                },
                              ],
                              expressions: [
                                {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 66,
                                      column: 11,
                                    },
                                    end: {
                                      line: 66,
                                      column: 15,
                                    },
                                  },
                                  range: [2084, 2088],
                                  name: 'data',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                              ],
                            },
                          },
                        },
                      },
                    ],
                    kind: 'const',
                  },
                  {
                    type: 'VariableDeclaration',
                    loc: {
                      source: null,
                      start: {
                        line: 67,
                        column: 2,
                      },
                      end: {
                        line: 67,
                        column: 68,
                      },
                    },
                    range: [2094, 2160],
                    declarations: [
                      {
                        type: 'VariableDeclarator',
                        loc: {
                          source: null,
                          start: {
                            line: 67,
                            column: 8,
                          },
                          end: {
                            line: 67,
                            column: 67,
                          },
                        },
                        range: [2100, 2159],
                        id: {
                          type: 'Identifier',
                          loc: {
                            source: null,
                            start: {
                              line: 67,
                              column: 8,
                            },
                            end: {
                              line: 67,
                              column: 12,
                            },
                          },
                          range: [2100, 2104],
                          name: 'Comp',
                          typeAnnotation: null,
                          optional: false,
                        },
                        init: {
                          type: 'LogicalExpression',
                          loc: {
                            source: null,
                            start: {
                              line: 67,
                              column: 15,
                            },
                            end: {
                              line: 67,
                              column: 67,
                            },
                          },
                          range: [2107, 2159],
                          operator: '&&',
                          left: {
                            type: 'Identifier',
                            loc: {
                              source: null,
                              start: {
                                line: 67,
                                column: 15,
                              },
                              end: {
                                line: 67,
                                column: 31,
                              },
                            },
                            range: [2107, 2123],
                            name: 'componentFactory',
                            typeAnnotation: null,
                            optional: false,
                          },
                          right: {
                            type: 'CallExpression',
                            loc: {
                              source: null,
                              start: {
                                line: 67,
                                column: 35,
                              },
                              end: {
                                line: 67,
                                column: 67,
                              },
                            },
                            range: [2127, 2159],
                            callee: {
                              type: 'Identifier',
                              loc: {
                                source: null,
                                start: {
                                  line: 67,
                                  column: 35,
                                },
                                end: {
                                  line: 67,
                                  column: 51,
                                },
                              },
                              range: [2127, 2143],
                              name: 'componentFactory',
                              typeAnnotation: null,
                              optional: false,
                            },
                            typeArguments: null,
                            arguments: [
                              {
                                type: 'ObjectExpression',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 67,
                                    column: 52,
                                  },
                                  end: {
                                    line: 67,
                                    column: 66,
                                  },
                                },
                                range: [2144, 2158],
                                properties: [
                                  {
                                    type: 'Property',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 67,
                                        column: 54,
                                      },
                                      end: {
                                        line: 67,
                                        column: 58,
                                      },
                                    },
                                    range: [2146, 2150],
                                    key: {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 67,
                                          column: 54,
                                        },
                                        end: {
                                          line: 67,
                                          column: 58,
                                        },
                                      },
                                      range: [2146, 2150],
                                      name: 'name',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                    value: {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 67,
                                          column: 54,
                                        },
                                        end: {
                                          line: 67,
                                          column: 58,
                                        },
                                      },
                                      range: [2146, 2150],
                                      name: 'name',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                    kind: 'init',
                                    method: false,
                                    shorthand: true,
                                    computed: false,
                                  },
                                  {
                                    type: 'Property',
                                    loc: {
                                      source: null,
                                      start: {
                                        line: 67,
                                        column: 60,
                                      },
                                      end: {
                                        line: 67,
                                        column: 64,
                                      },
                                    },
                                    range: [2152, 2156],
                                    key: {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 67,
                                          column: 60,
                                        },
                                        end: {
                                          line: 67,
                                          column: 64,
                                        },
                                      },
                                      range: [2152, 2156],
                                      name: 'data',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                    value: {
                                      type: 'Identifier',
                                      loc: {
                                        source: null,
                                        start: {
                                          line: 67,
                                          column: 60,
                                        },
                                        end: {
                                          line: 67,
                                          column: 64,
                                        },
                                      },
                                      range: [2152, 2156],
                                      name: 'data',
                                      typeAnnotation: null,
                                      optional: false,
                                    },
                                    kind: 'init',
                                    method: false,
                                    shorthand: true,
                                    computed: false,
                                  },
                                ],
                              },
                            ],
                          },
                        },
                      },
                    ],
                    kind: 'const',
                  },
                  {
                    type: 'ReturnStatement',
                    loc: {
                      source: null,
                      start: {
                        line: 69,
                        column: 2,
                      },
                      end: {
                        line: 77,
                        column: 4,
                      },
                    },
                    range: [2164, 2343],
                    argument: {
                      type: 'ConditionalExpression',
                      loc: {
                        source: null,
                        start: {
                          line: 69,
                          column: 9,
                        },
                        end: {
                          line: 77,
                          column: 3,
                        },
                      },
                      range: [2171, 2342],
                      test: {
                        type: 'Identifier',
                        loc: {
                          source: null,
                          start: {
                            line: 69,
                            column: 9,
                          },
                          end: {
                            line: 69,
                            column: 13,
                          },
                        },
                        range: [2171, 2175],
                        name: 'Comp',
                        typeAnnotation: null,
                        optional: false,
                      },
                      consequent: {
                        type: 'JSXElement',
                        loc: {
                          source: null,
                          start: {
                            line: 70,
                            column: 4,
                          },
                          end: {
                            line: 72,
                            column: 11,
                          },
                        },
                        range: [2184, 2243],
                        openingElement: {
                          type: 'JSXOpeningElement',
                          loc: {
                            source: null,
                            start: {
                              line: 70,
                              column: 4,
                            },
                            end: {
                              line: 70,
                              column: 34,
                            },
                          },
                          range: [2184, 2214],
                          name: {
                            type: 'JSXIdentifier',
                            loc: {
                              source: null,
                              start: {
                                line: 70,
                                column: 5,
                              },
                              end: {
                                line: 70,
                                column: 9,
                              },
                            },
                            range: [2185, 2189],
                            name: 'Comp',
                          },
                          attributes: [
                            {
                              type: 'JSXAttribute',
                              loc: {
                                source: null,
                                start: {
                                  line: 70,
                                  column: 10,
                                },
                                end: {
                                  line: 70,
                                  column: 21,
                                },
                              },
                              range: [2190, 2201],
                              name: {
                                type: 'JSXIdentifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 70,
                                    column: 10,
                                  },
                                  end: {
                                    line: 70,
                                    column: 14,
                                  },
                                },
                                range: [2190, 2194],
                                name: 'name',
                              },
                              value: {
                                type: 'JSXExpressionContainer',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 70,
                                    column: 15,
                                  },
                                  end: {
                                    line: 70,
                                    column: 21,
                                  },
                                },
                                range: [2195, 2201],
                                expression: {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 70,
                                      column: 16,
                                    },
                                    end: {
                                      line: 70,
                                      column: 20,
                                    },
                                  },
                                  range: [2196, 2200],
                                  name: 'name',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                              },
                            },
                            {
                              type: 'JSXAttribute',
                              loc: {
                                source: null,
                                start: {
                                  line: 70,
                                  column: 22,
                                },
                                end: {
                                  line: 70,
                                  column: 33,
                                },
                              },
                              range: [2202, 2213],
                              name: {
                                type: 'JSXIdentifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 70,
                                    column: 22,
                                  },
                                  end: {
                                    line: 70,
                                    column: 26,
                                  },
                                },
                                range: [2202, 2206],
                                name: 'data',
                              },
                              value: {
                                type: 'JSXExpressionContainer',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 70,
                                    column: 27,
                                  },
                                  end: {
                                    line: 70,
                                    column: 33,
                                  },
                                },
                                range: [2207, 2213],
                                expression: {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 70,
                                      column: 28,
                                    },
                                    end: {
                                      line: 70,
                                      column: 32,
                                    },
                                  },
                                  range: [2208, 2212],
                                  name: 'data',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                              },
                            },
                          ],
                          selfClosing: false,
                        },
                        closingElement: {
                          type: 'JSXClosingElement',
                          loc: {
                            source: null,
                            start: {
                              line: 72,
                              column: 4,
                            },
                            end: {
                              line: 72,
                              column: 11,
                            },
                          },
                          range: [2236, 2243],
                          name: {
                            type: 'JSXIdentifier',
                            loc: {
                              source: null,
                              start: {
                                line: 72,
                                column: 6,
                              },
                              end: {
                                line: 72,
                                column: 10,
                              },
                            },
                            range: [2238, 2242],
                            name: 'Comp',
                          },
                        },
                        children: [
                          {
                            type: 'JSXText',
                            loc: {
                              source: null,
                              start: {
                                line: 70,
                                column: 34,
                              },
                              end: {
                                line: 71,
                                column: 6,
                              },
                            },
                            range: [2214, 2221],
                            value: '\n      ',
                            raw: '\n      ',
                          },
                          {
                            type: 'JSXExpressionContainer',
                            loc: {
                              source: null,
                              start: {
                                line: 71,
                                column: 6,
                              },
                              end: {
                                line: 71,
                                column: 16,
                              },
                            },
                            range: [2221, 2231],
                            expression: {
                              type: 'Identifier',
                              loc: {
                                source: null,
                                start: {
                                  line: 71,
                                  column: 7,
                                },
                                end: {
                                  line: 71,
                                  column: 15,
                                },
                              },
                              range: [2222, 2230],
                              name: 'elements',
                              typeAnnotation: null,
                              optional: false,
                            },
                          },
                          {
                            type: 'JSXText',
                            loc: {
                              source: null,
                              start: {
                                line: 71,
                                column: 16,
                              },
                              end: {
                                line: 72,
                                column: 4,
                              },
                            },
                            range: [2231, 2236],
                            value: '\n    ',
                            raw: '\n    ',
                          },
                        ],
                      },
                      alternate: {
                        type: 'JSXElement',
                        loc: {
                          source: null,
                          start: {
                            line: 74,
                            column: 4,
                          },
                          end: {
                            line: 76,
                            column: 10,
                          },
                        },
                        range: [2256, 2338],
                        openingElement: {
                          type: 'JSXOpeningElement',
                          loc: {
                            source: null,
                            start: {
                              line: 74,
                              column: 4,
                            },
                            end: {
                              line: 74,
                              column: 58,
                            },
                          },
                          range: [2256, 2310],
                          name: {
                            type: 'JSXIdentifier',
                            loc: {
                              source: null,
                              start: {
                                line: 74,
                                column: 5,
                              },
                              end: {
                                line: 74,
                                column: 8,
                              },
                            },
                            range: [2257, 2260],
                            name: 'div',
                          },
                          attributes: [
                            {
                              type: 'JSXAttribute',
                              loc: {
                                source: null,
                                start: {
                                  line: 74,
                                  column: 9,
                                },
                                end: {
                                  line: 74,
                                  column: 42,
                                },
                              },
                              range: [2261, 2294],
                              name: {
                                type: 'JSXIdentifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 74,
                                    column: 9,
                                  },
                                  end: {
                                    line: 74,
                                    column: 35,
                                  },
                                },
                                range: [2261, 2287],
                                name: 'data-meta-superficial-name',
                              },
                              value: {
                                type: 'JSXExpressionContainer',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 74,
                                    column: 36,
                                  },
                                  end: {
                                    line: 74,
                                    column: 42,
                                  },
                                },
                                range: [2288, 2294],
                                expression: {
                                  type: 'Identifier',
                                  loc: {
                                    source: null,
                                    start: {
                                      line: 74,
                                      column: 37,
                                    },
                                    end: {
                                      line: 74,
                                      column: 41,
                                    },
                                  },
                                  range: [2289, 2293],
                                  name: 'name',
                                  typeAnnotation: null,
                                  optional: false,
                                },
                              },
                            },
                            {
                              type: 'JSXSpreadAttribute',
                              loc: {
                                source: null,
                                start: {
                                  line: 74,
                                  column: 43,
                                },
                                end: {
                                  line: 74,
                                  column: 57,
                                },
                              },
                              range: [2295, 2309],
                              argument: {
                                type: 'Identifier',
                                loc: {
                                  source: null,
                                  start: {
                                    line: 74,
                                    column: 47,
                                  },
                                  end: {
                                    line: 74,
                                    column: 56,
                                  },
                                },
                                range: [2299, 2308],
                                name: 'dataProps',
                                typeAnnotation: null,
                                optional: false,
                              },
                            },
                          ],
                          selfClosing: false,
                        },
                        closingElement: {
                          type: 'JSXClosingElement',
                          loc: {
                            source: null,
                            start: {
                              line: 76,
                              column: 4,
                            },
                            end: {
                              line: 76,
                              column: 10,
                            },
                          },
                          range: [2332, 2338],
                          name: {
                            type: 'JSXIdentifier',
                            loc: {
                              source: null,
                              start: {
                                line: 76,
                                column: 6,
                              },
                              end: {
                                line: 76,
                                column: 9,
                              },
                            },
                            range: [2334, 2337],
                            name: 'div',
                          },
                        },
                        children: [
                          {
                            type: 'JSXText',
                            loc: {
                              source: null,
                              start: {
                                line: 74,
                                column: 58,
                              },
                              end: {
                                line: 75,
                                column: 6,
                              },
                            },
                            range: [2310, 2317],
                            value: '\n      ',
                            raw: '\n      ',
                          },
                          {
                            type: 'JSXExpressionContainer',
                            loc: {
                              source: null,
                              start: {
                                line: 75,
                                column: 6,
                              },
                              end: {
                                line: 75,
                                column: 16,
                              },
                            },
                            range: [2317, 2327],
                            expression: {
                              type: 'Identifier',
                              loc: {
                                source: null,
                                start: {
                                  line: 75,
                                  column: 7,
                                },
                                end: {
                                  line: 75,
                                  column: 15,
                                },
                              },
                              range: [2318, 2326],
                              name: 'elements',
                              typeAnnotation: null,
                              optional: false,
                            },
                          },
                          {
                            type: 'JSXText',
                            loc: {
                              source: null,
                              start: {
                                line: 75,
                                column: 16,
                              },
                              end: {
                                line: 76,
                                column: 4,
                              },
                            },
                            range: [2327, 2332],
                            value: '\n    ',
                            raw: '\n    ',
                          },
                        ],
                      },
                    },
                  },
                ],
              },
              async: false,
              generator: false,
              predicate: null,
              expression: false,
              returnType: null,
              typeParameters: null,
            },
          },
        ],
        kind: 'const',
      },
      specifiers: [],
      source: null,
      exportKind: 'value',
    },
    {
      type: 'ExportDefaultDeclaration',
      loc: {
        source: null,
        start: {
          line: 80,
          column: 0,
        },
        end: {
          line: 80,
          column: 27,
        },
      },
      range: [2348, 2375],
      declaration: {
        type: 'Identifier',
        loc: {
          source: null,
          start: {
            line: 80,
            column: 15,
          },
          end: {
            line: 80,
            column: 26,
          },
        },
        range: [2363, 2374],
        name: 'Superficial',
        typeAnnotation: null,
        optional: false,
      },
      exportKind: 'value',
    },
  ],
  comments: [],
  errors: [],
};
