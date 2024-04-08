
function getExpenseSuggestions(amount, expenseType) {
    let suggestions = [];
    let amountSaved = 0;

    switch (expenseType) {
        case 'food':
            suggestions = [
                'Plan your meals for the week and create a grocery list',
                'Buy staple foods in bulk to save on unit costs',
                'Use coupons and take advantage of sales at grocery stores',
                'Cook large batches of meals and freeze leftovers for future use',
                'Opt for store-brand products instead of name brands',
                'Limit eating out and prioritize homemade meals'
              ];
            amountSaved = 0.2 * amount;
            break;
        case 'transportation':
            suggestions = ['Use public transportation or ride-sharing services',
            'Carpool with coworkers or friends for commuting',
            'Bike or walk for short distances or nearby places',
            'Maintain regular vehicle maintenance to optimize fuel efficiency',
            'Consider downsizing to a more fuel-efficient vehicle',
            'Explore telecommuting or remote work options to reduce commuting costs'];
            amountSaved = 0.2 * amount;
            break;
        case 'entertainment':
            suggestions = [
                'Host game nights at home instead of going out',
                'Explore free local events and activities',
                'Take advantage of student, senior, or group discounts',
                'Swap books, movies, or video games with friends or at a local library',
                'Enjoy outdoor activities like hiking, picnics, or visiting parks',
                'Plan budget-friendly staycations instead of expensive vacations'
              ];
            amountSaved = 0.2 * amount;
            break;
            case 'housing':
                suggestions = [
                    'Downsize to a smaller home or apartment',
                    'Rent out a spare room or space in your home',
                    'Negotiate rent with your landlord or explore lower-cost housing options',
                    'Consider living in a more affordable neighborhood or area',
                    'Reduce utility expenses by improving energy efficiency (e.g., insulating, using energy-saving appliances)',
                    'Shop around for better deals on home insurance and mortgage rates'
                  ];
                  amountSaved = 0.2 * amount;
                  break;
                  case 'Investments and Retirement Planning':
                    suggestions = [
                        'Start contributing to a retirement account as early as possible',
                        'Diversify your investment portfolio to spread risk',
                        'Take advantage of employer-sponsored retirement plans like 401(k)s',
                        'Consider investing in low-cost index funds or exchange-traded funds (ETFs)',
                        'Regularly review and adjust your investment strategy based on your goals and risk tolerance',
                        'Consult with a financial advisor to develop a personalized retirement plan'
                      ];
                      amountSaved=0.3*amount;
                      break;
                      case 'Utilities and Energy Consumption':
                        suggestions = [
                            'Turn off lights and appliances when not in use',
                            'Use energy-efficient LED light bulbs',
                            'Set your thermostat to a reasonable temperature and use a programmable thermostat',
                            'Seal drafts and insulate your home to reduce heating and cooling costs',
                            'Wash clothes in cold water and air dry when possible',
                            'Unplug electronics and chargers when not in use to avoid phantom energy usage'
                          ];
                          amountSaved=0.3*amount;
                          break;
                          case 'Insurance and Healthcare Costs':
                            [
                                'Shop around for insurance plans to find the best rates',
                                'Consider raising your deductible to lower your insurance premiums',
                                'Take advantage of employer-sponsored health insurance plans, if available',
                                'Opt for generic medications instead of brand-name drugs when possible',
                                'Utilize preventative care services to avoid costly medical treatments in the future',
                                'Negotiate medical bills or set up payment plans if you encounter unexpected healthcare expenses'
                              ];
                              amountSaved=0.45*amount;
                              break;
                              case 'Shopping':
                                suggestions = [
                                    'Create a budget and stick to it while shopping',
                                    'Make a shopping list and avoid impulse purchases',
                                    'Compare prices at different stores or online before making a purchase',
                                    'Look for sales, discounts, and coupons to maximize savings',
                                    'Consider buying second-hand or refurbished items instead of brand new ones',
                                    'Use cashback or rewards programs to earn discounts or cashback on your purchases'
                                  ];
                                  amountSaved=0.35*amount;
                                  break;
                                  case 'Personal Finance Management':
                                    suggestions = [
                                        'Create a monthly budget to track your income and expenses',
                                        'Prioritize saving by setting aside a portion of your income each month',
                                        'Automate your savings by setting up automatic transfers to your savings account',
                                        'Pay off high-interest debts as quickly as possible to avoid paying extra interest',
                                        'Track your spending habits to identify areas where you can cut back and save more',
                                        'Educate yourself about personal finance topics such as investing, retirement planning, and managing debt'
                                      ];
                                      amountSaved=0.45*amount;
                                      break;
                    default:
                     suggestions = ['No suggestions available for this expense type'];
                    amountSaved=0;
                       break;
    }

    return { suggestions, amountSaved };
} // Return an object with suggestions and amountsaved;


export default getExpenseSuggestions;